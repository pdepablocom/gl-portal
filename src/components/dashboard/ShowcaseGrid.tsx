// Server component — no "use client" needed

export interface ShowcaseItem {
  title: string;
  author: string;
}

export interface ShowcaseGridProps {
  title: string;
  subtitle: string;
  items: ShowcaseItem[];
}

// Placeholder gradients — one per card slot
const CARD_GRADIENTS = [
  "from-[#3b1f6b] via-[#5b2fa0] to-[#8d60d4]",
  "from-[#1a3a5c] via-[#1e5f8e] to-[#3b9dcc]",
  "from-[#1f3d2b] via-[#2a6644] to-[#45a86e]",
];

export default function ShowcaseGrid({
  title,
  subtitle,
  items,
}: ShowcaseGridProps) {
  // Only show up to 3 cards
  const displayItems = items.slice(0, 3);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-section-title text-gray-950">{title}</h2>
          <p className="text-body-regular text-gray-500">{subtitle}</p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-body-regular text-gray-500 transition-colors hover:text-gray-950"
        >
          Explore all
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Cards row */}
      <div className="flex w-full gap-[10px]">
        {displayItems.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`relative flex-1 overflow-hidden rounded-lg bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]}`}
            style={{ height: "150px" }}
          >
            {/* Top-right: external link icon circle */}
            <div className="absolute right-3 top-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11L11 3M11 3H6M11 3V8"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom-left: avatar + title + author */}
            <div className="absolute bottom-0 left-0 flex items-center gap-3 p-4">
              {/* Avatar placeholder */}
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/20" />

              <div className="flex flex-col gap-0.5">
                <span className="text-body text-white leading-tight line-clamp-1">
                  {item.title}
                </span>
                <span className="text-label text-white/60">
                  by {item.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
