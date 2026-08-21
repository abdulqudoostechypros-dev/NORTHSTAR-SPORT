import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getManagedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

const posts = {
  "final-seconds": {
    category: "Visual direction",
    title: "The final seconds",
    description: "Focus, pace, and the feeling of getting there.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=85",
    alt: "Runner crossing a finish line",
    author: "Northstar Studio",
    readTime: "5 min read",
    published: "April 18, 2026",
    pullQuote: "The story does not begin at the finish line. It begins in the tension before the body commits.",
    lead: "The finish line is a visual punctuation mark. The work before it is where the story earns its weight.",
    sections: [
      ["Start with the tension", "Sport gives us a rare kind of clarity: a visible goal, a moving clock, and a body committed to the next step. Strong creative work holds onto that tension instead of smoothing it away. It creates a moment that feels active before the result lands."],
      ["Build the rhythm before the payoff", "The most memorable finish is rarely isolated. It is connected to a sequence of glances, breaths, and movements that let the audience feel the cost of the effort. That rhythm is what turns a moment into a story people want to revisit."],
      ["Make the moment legible", "The job is not to explain every detail. It is to give the audience one detail they can feel, then a clear reason to keep moving through the image. Good visual direction leaves room for emotion without creating confusion."],
      ["Leave something behind", "The best finish does not close the conversation. It gives the audience a feeling, a question, or a reason to come back for the next one. That is where the story becomes more than a clip and starts to become part of a larger sporting mood."],
    ],
  },
  "before-the-whistle": {
    category: "Editorial strategy",
    title: "Before the whistle",
    description: "The details that build a bigger sporting story.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1600&q=85",
    alt: "Athlete preparing for competition",
    author: "Northstar Studio",
    readTime: "6 min read",
    published: "May 02, 2026",
    pullQuote: "The real story is often not the event itself, but the discipline that leads into it.",
    lead: "The most useful stories often begin before the moment everyone is waiting for.",
    sections: [
      ["Look for the preparation", "Training, ritual, doubt, and small acts of focus give the audience a way into the competition. They make the result feel connected to a person, not just a scoreboard. A story gains force when it treats preparation as part of the drama."],
      ["Build a useful rhythm", "A strong editorial system knows when to slow down, when to explain, and when to let the image carry the weight. Rhythm turns a collection of updates into a world people can return to. It helps the story breathe without losing the urgency of the moment."],
      ["Give the audience a role", "The best pre-match work does not only announce what is coming. It gives people a reason to care about what happens next, whether that is through context, stakes, or a simple emotional detail that makes the contest feel personal."],
      ["The payoff is in the continuity", "The strongest sporting stories feel connected across days, fixtures, and channels. When the editorial thread is clear, a pre-match note becomes part of a larger narrative rather than a one-off update."],
    ],
  },
  "find-your-rhythm": {
    category: "Content production",
    title: "Find your rhythm",
    description: "A visual language with energy built into every frame.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=85",
    alt: "Runner in motion on a track",
    author: "Northstar Studio",
    readTime: "4 min read",
    published: "May 29, 2026",
    pullQuote: "The strongest motion design does not shout for attention. It makes the pace of the story feel effortless.",
    lead: "Motion is not decoration. It is a way of helping an audience feel the pace of the story.",
    sections: [
      ["Let movement lead", "A useful visual system makes space for speed, pause, impact, and recovery. It gives each frame a job and keeps the whole story coherent. The best content does not rely on spectacle alone; it uses motion to create meaning."],
      ["Create a recognisable language", "Colour, crop, sound, and timing can work together without turning into a template. Consistency should make a story easier to recognise, not harder to feel. A brand language becomes valuable when it helps the audience understand the story faster."],
      ["Keep the edit intentional", "Every cut should add clarity, friction, or emotion. If the pace is rushed, the story loses the feeling it was trying to create. Production work is strongest when it gives the audience a sense of time and effort without slowing them down."],
      ["Make it travel", "A production idea is strongest when it can adapt across a campaign film, a social cut, a still image, and the next story waiting in the schedule. That flexibility is what turns a good asset into a useful system."],
    ],
  },
  "made-for-the-moment": {
    category: "Campaign creative",
    title: "Made for the moment",
    description: "Atmosphere, attention, and a reason to keep watching.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=85",
    alt: "Athlete under stadium lights",
    author: "Northstar Studio",
    readTime: "7 min read",
    published: "June 12, 2026",
    pullQuote: "A campaign feels memorable when the audience can sense the atmosphere before they understand the message.",
    lead: "Atmosphere is not a filter placed over a story. It is the context that makes the story matter.",
    sections: [
      ["Respect the setting", "Light, crowd, weather, and silence all carry information. Paying attention to the setting gives creative work more texture without adding noise. The best sport imagery understands that the environment is part of the performance."],
      ["Earn attention quickly", "A good opening creates a question in the viewer's mind. It does not need to explain everything; it needs to make the next second feel worth taking. The first frame should feel like a decision, not an announcement."],
      ["Keep the human centre", "Even the biggest sporting moment becomes memorable through a human detail: a gesture, a breath, a glance, or a choice. The work feels richest when it remembers that performance is carried by people, not just scale."],
      ["Craft a clear emotional arc", "Campaigns work best when they know where the feeling begins, where it peaks, and what should remain after the final shot. That arc gives the audience something to hold onto beyond the moment itself."],
    ],
  },
  "keep-it-moving": {
    category: "Audience growth",
    title: "Keep it moving",
    description: "Stories designed to travel beyond the matchday.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
    alt: "Runner moving through a stadium",
    author: "Northstar Studio",
    readTime: "8 min read",
    published: "June 26, 2026",
    pullQuote: "A good audience strategy does not create more noise. It creates a stronger reason to stay with the story.",
    lead: "A season is a long conversation. The work should give people a reason to stay in it.",
    sections: [
      ["Think in chapters", "An audience grows when each piece feels complete but not isolated. The next story should feel like a natural continuation, not another restart. Chapters create momentum without forcing the same formula every time."],
      ["Give every channel a role", "The same idea can behave differently in a film, a caption, an interview, or a live update. Distribution works best when the format is part of the thinking, not an afterthought added at the end."],
      ["Make the next move obvious", "Useful content creates a bridge. It helps the audience see how the story develops, what matters next, and why they should return. That is how a piece of sport content becomes part of a relationship."],
      ["Build for the long view", "Short-term attention matters, but a useful system leaves the team with a clearer voice and more room to make the next move. The best content strategy does not just chase momentum; it creates the conditions for another strong story."],
    ],
  },
};

const slugs = Object.keys(posts);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const managedPosts = await getManagedPosts();
  const post = managedPosts[slug] || posts[slug] || posts["final-seconds"];
  return { title: `${post.title} | Northstar Sport`, description: post.description };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const managedPosts = await getManagedPosts();
  const availablePosts = { ...posts, ...managedPosts };
  const post = availablePosts[slug] || availablePosts["final-seconds"];
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextPost = availablePosts[nextSlug];

  return (
    <main>
      <Header />
      <article className="pt-[72px]">
        <div className="wrap py-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-ink-soft transition hover:text-coral">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
        </div>

        <header className="bg-navy text-white">
          <div className="wrap grid items-end gap-12 py-14 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
            <div>
              <p className="eyebrow">Portfolio post / {post.category}</p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">{post.title}</h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{post.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[.16em] text-white/40">
                <span>{post.published}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{post.readTime}</span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display font-bold text-white">NS</span>
                <span>By {post.author}</span>
              </div>
            </div>

            <img src={post.image} alt={post.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
        </header>

        <div className="wrap grid gap-12 py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">In this post</p>
            <p className="mt-4 font-display text-lg font-bold">{post.title}</p>
            <div className="mt-5 space-y-3 text-sm text-muted">
              <p>{post.published}</p>
              <p>{post.readTime}</p>
              <p>{post.category}</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">A short editorial note on the thinking behind a memorable sports story.</p>
          </aside>

          <div className="max-w-3xl">
            <p className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{post.lead}</p>

            <blockquote className="mt-10 border-l-4 border-coral bg-surface pl-6 pr-4 py-5 text-xl font-medium leading-relaxed text-ink">
              “{post.pullQuote}”
            </blockquote>

            {post.sections.map(([heading, copy]) => (
              <section key={heading} className="mt-12 border-t border-line pt-8">
                <p className="eyebrow">Northstar perspective</p>
                <h2 className="mt-3 font-display text-2xl font-bold">{heading}</h2>
                <p className="mt-4 text-base leading-8 text-ink-soft">{copy}</p>
              </section>
            ))}

            <div className="mt-14 border-l-4 border-coral bg-surface p-6 text-sm leading-7 text-ink-soft">
              This is an illustrative editorial post using external imagery. It is not presented as a Northstar client project, case study, testimonial, or performance claim.
            </div>

            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white transition hover:bg-ink">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="wrap pb-20 pt-14">
          <div className="flex items-center justify-between border-t border-line pt-8">
            <div>
              <p className="eyebrow">Next post</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">{nextPost.title}</h2>
            </div>
            <Link href={`/portfolio/${nextSlug}`} className="inline-flex items-center gap-2 text-sm font-bold text-coral">
              Read next <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
