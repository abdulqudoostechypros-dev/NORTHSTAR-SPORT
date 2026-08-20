"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { FootballAmericanIcon } from "./icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section className="wrap pb-20">
      <div className="rounded-2xl bg-surface p-8 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display uppercase leading-[0.95] text-4xl md:text-5xl">
              <span className="block text-ink">Newsletter</span>
              <span className="block" style={{ color: "#9AA0A6" }}>
                Subscription
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 pl-5 border border-line">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full bg-transparent text-sm text-ink-soft outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white hover:bg-ink-soft transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-xs text-ink-soft">
                Thanks — you're on the list.
              </p>
            )}
          </div>

          <PlaceholderImage
            icon={FootballAmericanIcon}
            from="#6b1f1f"
            to="#150404"
            className="h-56 md:h-72 rounded-xl"
            iconClassName="w-14 h-14"
          />
        </div>
      </div>
    </section>
  );
}
