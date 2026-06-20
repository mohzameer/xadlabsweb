import type { APIRoute } from 'astro';
import { mkdir, writeFile, readFile, access } from 'node:fs/promises';
import path from 'node:path';

// Server-rendered: writes a file to the local content folder. Local authoring only.
export const prerender = false;

const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Decode the HTML entities the contenteditable editor emits (esp. &nbsp;) so they
// don't leak into the plain-text description.
function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, '&');
}

// Pull the first ~40 words of plain text out of the HTML for the description.
function deriveDescription(html: string): string {
  const text = decodeEntities(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
  const words = text.split(' ').slice(0, 40).join(' ');
  return text.length > words.length ? `${words}…` : words;
}

// Escape a string for safe use inside a double-quoted YAML scalar.
function yamlString(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// Read the existing pubDate so edits don't reset a post's publish date.
async function existingPubDate(filePath: string): Promise<string | null> {
  try {
    const raw = await readFile(filePath, 'utf-8');
    const m = raw.match(/^pubDate:\s*(.+)$/m);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request }) => {
  // Publishing/editing is a local-only tool — disabled in production builds.
  if (!import.meta.env.DEV) return json({ error: 'Not found.' }, 404);

  let body: { title?: string; html?: string; description?: string; slug?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const title = (body.title ?? '').trim();
  const html = (body.html ?? '').trim();
  // When `slug` is present we're editing an existing post; the slug stays stable
  // even if the title changed, so links don't break.
  const editSlug = (body.slug ?? '').trim();

  if (!title) return json({ error: 'A title is required.' }, 400);
  if (!html) return json({ error: 'The post body is empty.' }, 400);

  const isEdit = editSlug !== '';
  const slug = isEdit ? editSlug : slugify(title);
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return json({ error: 'Title produced an empty or invalid slug.' }, 400);
  }

  await mkdir(BLOG_DIR, { recursive: true });
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileExists = await exists(filePath);

  if (isEdit && !fileExists) {
    return json({ error: `No post found for slug "${slug}".` }, 404);
  }
  if (!isEdit && fileExists) {
    return json({ error: `A post with the slug "${slug}" already exists.` }, 409);
  }

  // Preserve the original date on edits; stamp today's date on new posts.
  const pubDate =
    (isEdit ? await existingPubDate(filePath) : null) ?? new Date().toISOString().slice(0, 10);
  const description = (body.description ?? deriveDescription(html)).trim();

  const frontmatter = [
    '---',
    `title: ${yamlString(title)}`,
    `pubDate: ${pubDate}`,
    `description: ${yamlString(description)}`,
    '---',
    '',
  ].join('\n');

  await writeFile(filePath, `${frontmatter}${html}\n`, 'utf-8');

  return json(
    { slug, path: `src/content/blog/${slug}.md`, url: `/blog/${slug}`, edited: isEdit },
    isEdit ? 200 : 201
  );
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
