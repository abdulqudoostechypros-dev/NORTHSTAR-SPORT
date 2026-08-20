import { getManagedPosts, isValidPost, saveManagedPosts } from "@/lib/posts";

export const runtime = "nodejs";

function persistentStoreAvailable() {
  return !process.env.VERCEL;
}

function authorized(request) {
  return Boolean(process.env.ADMIN_KEY) && request.headers.get("x-admin-key") === process.env.ADMIN_KEY;
}

export async function GET(request) {
  if (!authorized(request)) return Response.json({ message: "Unauthorized" }, { status: 401 });
  return Response.json(await getManagedPosts());
}

export async function POST(request) {
  if (!authorized(request)) return Response.json({ message: "Unauthorized" }, { status: 401 });
  if (!persistentStoreAvailable()) return Response.json({ message: "Post editing is disabled on Vercel until a persistent database is connected." }, { status: 503 });

  const post = await request.json();
  if (!isValidPost(post)) return Response.json({ message: "Complete all post fields before saving." }, { status: 400 });

  const posts = await getManagedPosts();
  if (posts[post.slug]) return Response.json({ message: "That slug already exists." }, { status: 409 });
  posts[post.slug] = post;
  await saveManagedPosts(posts);
  return Response.json(post, { status: 201 });
}

export async function PUT(request) {
  if (!authorized(request)) return Response.json({ message: "Unauthorized" }, { status: 401 });
  if (!persistentStoreAvailable()) return Response.json({ message: "Post editing is disabled on Vercel until a persistent database is connected." }, { status: 503 });

  const post = await request.json();
  if (!isValidPost(post)) return Response.json({ message: "Complete all post fields before saving." }, { status: 400 });

  const posts = await getManagedPosts();
  if (!posts[post.slug]) return Response.json({ message: "Post not found." }, { status: 404 });
  posts[post.slug] = post;
  await saveManagedPosts(posts);
  return Response.json(post);
}

export async function DELETE(request) {
  if (!authorized(request)) return Response.json({ message: "Unauthorized" }, { status: 401 });
  if (!persistentStoreAvailable()) return Response.json({ message: "Post editing is disabled on Vercel until a persistent database is connected." }, { status: 503 });

  const slug = new URL(request.url).searchParams.get("slug");
  const posts = await getManagedPosts();
  if (!slug || !posts[slug]) return Response.json({ message: "Post not found." }, { status: 404 });
  delete posts[slug];
  await saveManagedPosts(posts);
  return Response.json({ success: true });
}
