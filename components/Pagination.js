import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination({ current = 1, total = 4 }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-3">
      <button
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-md bg-line text-muted hover:bg-ink/10 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      {pages.map((page) =>
        page === current ? (
          <span
            key={page}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-medium text-white"
          >
            {page}
          </span>
        ) : (
          <button
            key={page}
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            {page}
          </button>
        )
      )}

      <button
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white hover:bg-ink-soft transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
