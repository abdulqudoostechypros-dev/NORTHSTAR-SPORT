"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const emptyPost = {
  slug: "",
  category: "",
  title: "",
  description: "",
  image: "",
  alt: "",
  author: "Northstar Studio",
  readTime: "5 min read",
  published: "",
  pullQuote: "",
  lead: "",
  sections: [["", ""]],
};

export default function AdminPosts() {
  const [key, setKey] = useState("");
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState(emptyPost);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      setMessage("");
      setError("");
      if (!key) {
        setPosts({});
        setPost(emptyPost);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch("/api/posts", {
          headers: { "x-admin-key": key },
          signal: controller.signal,
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          setPosts({});
          setError(result.message || "Invalid admin key.");
          return;
        }
        setPosts(result);
      } catch (loadError) {
        if (loadError.name !== "AbortError") setError("Unable to load posts.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadPosts();
    return () => controller.abort();
  }, [key]);

  function updateField(field, value) {
    setPost((current) => ({ ...current, [field]: value }));
  }

  function updateSection(index, field, value) {
    setPost((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) => sectionIndex === index
        ? (field === "heading" ? [value, section[1]] : [section[0], value])
        : section),
    }));
  }

  async function save(event) {
    event.preventDefault();
    setMessage("");
    setError("");
    if (!key) {
      setError("Enter the admin key before saving a post.");
      return;
    }
    const payload = { ...post, sections: post.sections.filter(([heading, copy]) => heading.trim() && copy.trim()) };
    const method = posts[post.slug] ? "PUT" : "POST";
    const response = await fetch("/api/posts", {
      method,
      headers: { "Content-Type": "application/json", "x-admin-key": key },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(result.message || "Unable to save post.");
      return;
    }
    setPosts((current) => ({ ...current, [result.slug]: result }));
    setPost(result);
    setMessage("Post saved.");
  }

  async function remove(slug) {
    setError("");
    setMessage("");
    if (!key) {
      setError("Enter the admin key before deleting a post.");
      return;
    }
    const response = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`, { method: "DELETE", headers: { "x-admin-key": key } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(result.message || "Unable to delete post.");
      return;
    }
    const next = { ...posts };
    delete next[slug];
    setPosts(next);
    setPost(emptyPost);
    setMessage("Post deleted.");
  }

  return (
    <main className="min-h-screen bg-surface px-5 py-10 text-ink sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-line pb-8">
          <div><p className="eyebrow">Northstar Sport / Admin</p><h1 className="mt-3 font-display text-4xl font-bold">Manage portfolio posts</h1></div>
          <Link href="/portfolio" className="text-sm font-bold text-coral">View public portfolio</Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <aside>
            <label className="text-sm font-semibold">Admin key<input type="password" value={key} onChange={(event) => setKey(event.target.value)} className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none" placeholder="ADMIN_KEY" /></label>
            <button type="button" onClick={() => setPost(emptyPost)} className="mt-8 text-sm font-bold text-coral">+ New post</button>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {Object.values(posts).map((item) => <div key={item.slug} className="flex items-center justify-between gap-3 py-4"><button type="button" onClick={() => setPost(item)} className="text-left text-sm font-bold">{item.title}<span className="mt-1 block text-xs font-normal text-muted">/{item.slug}</span></button><button type="button" onClick={() => remove(item.slug)} className="text-xs font-bold text-red-600">Delete</button></div>)}
              {!Object.keys(posts).length && <p className="py-4 text-sm text-muted">No managed posts yet.</p>}
            </div>
          </aside>

          <form onSubmit={save} className="space-y-5 bg-white p-7 shadow-[0_12px_40px_rgba(19,34,56,.06)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[["slug", "Slug"], ["category", "Category"], ["title", "Title"], ["author", "Author"], ["readTime", "Read time"], ["published", "Published"]].map(([field, label]) => <label key={field} className="text-sm font-semibold">{label}<input required value={post[field]} onChange={(event) => updateField(field, event.target.value)} className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none" /></label>)}
            </div>
            {[['description', 'Description'], ['image', 'Image URL'], ['alt', 'Image alt text'], ['pullQuote', 'Pull quote'], ['lead', 'Lead paragraph']].map(([field, label]) => <label key={field} className="block text-sm font-semibold">{label}<textarea required value={post[field]} onChange={(event) => updateField(field, event.target.value)} rows={field === 'lead' || field === 'pullQuote' ? 3 : 2} className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 outline-none" /></label>)}
            <div><p className="text-sm font-semibold">Article sections</p>{post.sections.map((section, index) => <div key={index} className="mt-3 grid gap-3 sm:grid-cols-2"><input value={section[0]} onChange={(event) => updateSection(index, "heading", event.target.value)} className="border-b border-line px-0 py-3 text-sm outline-none" placeholder="Section heading" /><textarea value={section[1]} onChange={(event) => updateSection(index, "copy", event.target.value)} rows={3} className="border-b border-line px-0 py-3 text-sm outline-none" placeholder="Section copy" /></div>)}<button type="button" onClick={() => setPost((current) => ({ ...current, sections: [...current.sections, ["", ""]] }))} className="mt-4 text-sm font-bold text-coral">+ Add section</button></div>
            <button type="submit" disabled={isLoading || !key} className="rounded-full bg-coral px-6 py-3 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50">Save post</button>
            <p aria-live="polite" className={`text-sm ${error ? "text-red-600" : message ? "text-aqua" : "text-muted"}`}>{message || error || (isLoading ? "Checking admin key..." : "Use the admin key from .env.local to manage posts.")}</p>
          </form>
        </div>
      </div>
    </main>
  );
}
