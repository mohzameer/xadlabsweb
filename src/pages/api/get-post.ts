import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Local authoring only: reads a post's raw content so the editor can pre-fill it.
export const prerender = false;

const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Unescape a double-quoted YAML scalar as written by save-post.
function unquote(value: string): string {
  const v = value.trim();
  if (v.startsWith('"') && v.endsWith('"')) {
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return v;
}

export const GET: APIRoute = async ({ url }) => {
  // Editing is a local-only tool — hidden in production builds.
  if (!import.meta.env.DEV) return json({ error: 'Not found.' }, 404);

  const slug = (url.searchParams.get('slug') ?? '').trim();
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) return json({ error: 'Invalid slug.' }, 400);

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  let raw: string;
  try {
    raw = await readFile(filePath, 'utf-8');
  } catch {
    return json({ error: 'Post not found.' }, 404);
  }

  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return json({ error: 'Could not parse post.' }, 422);

  const [, frontmatter, body] = match;
  const titleLine = frontmatter.match(/^title:\s*(.+)$/m);
  const title = titleLine ? unquote(titleLine[1]) : '';

  return json({ slug, title, html: body.trim() });
};
