import { getManagedPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getManagedPosts();
  return Response.json(Object.values(posts).map(({ slug, category, title, image, alt }) => ({ slug, category, title, image, alt })));
}
