import { promises as fs } from "node:fs";
import path from "node:path";

const postsPath = path.join(process.cwd(), "content", "posts.json");

export async function getManagedPosts() {
  try {
    const contents = await fs.readFile(postsPath, "utf8");
    return JSON.parse(contents);
  } catch {
    return {};
  }
}

export async function saveManagedPosts(posts) {
  await fs.mkdir(path.dirname(postsPath), { recursive: true });
  await fs.writeFile(postsPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
}

export function isValidPost(post) {
  return post && post.slug && post.title && post.description && post.image && post.alt && post.author && post.readTime && post.published && post.pullQuote && post.lead && Array.isArray(post.sections);
}
