import type { APIRoute } from 'astro';
import { unlink, access } from 'node:fs/promises';
import path from 'node:path';

// Local authoring only: removes a post's .md file. Hidden in production builds.
export const prerender = false;

const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) return json({ error: 'Not found.' }, 404);

  let body: { slug?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const slug = (body.slug ?? '').trim();
  // Reject anything that isn't a plain slug so we can't escape the blog folder.
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) return json({ error: 'Invalid slug.' }, 400);

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  try {
    await access(filePath);
  } catch {
    return json({ error: `No post found for slug "${slug}".` }, 404);
  }

  await unlink(filePath);
  return json({ ok: true, slug });
};
