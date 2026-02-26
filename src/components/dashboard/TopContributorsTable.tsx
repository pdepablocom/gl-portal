// Server component — no "use client" needed

interface Contributor {
  rank: number;
  name: string;
  initials: string;
  change: string;
  points: string;
}

const contributors: Contributor[] = [
  { rank: 1, name: "action", initials: "AC", change: "+1847", points: "12467GP" },
  { rank: 2, name: "BlockHunters", initials: "BH", change: "+1299", points: "11325GP" },
  { rank: 3, name: "luk", initials: "LU", change: "+2189", points: "9986GP" },
  { rank: 4, name: "VjnNodes", initials: "VJ", change: "+1104", points: "8126GP" },
  { rank: 5, name: "Pavel Kolosov", initials: "PK", change: "+892", points: "8082GP" },
];

function UpArrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
        stroke="#169941"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TopContributorsTable() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Top Contributors</h2>
        <p className="text-body-regular text-gray-500">
          This month curated builds
        </p>
      </div>

      {/* Table rows */}
      <div className="flex flex-col rounded-xl border border-gray-150 bg-white px-5 py-1 shadow-card">
        {contributors.map((contributor, index) => {
          const isLast = index === contributors.length - 1;
          return (
            <div
              key={contributor.rank}
              className={[
                "flex h-14 items-center gap-3",
                !isLast ? "border-b border-gray-150" : "",
              ].join(" ")}
            >
              {/* Rank */}
              <span
                className="text-caption w-8 shrink-0 text-gray-400"
                aria-label={`Rank ${contributor.rank}`}
              >
                #{contributor.rank}
              </span>

              {/* Avatar circle */}
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "var(--color-role-builder-bg)",
                  border: "1.5px solid rgba(233,147,34,0.2)",
                }}
                aria-hidden="true"
              >
                <span
                  className="font-heading text-[10px] font-medium"
                  style={{ color: "var(--color-role-builder)" }}
                >
                  {contributor.initials}
                </span>
              </div>

              {/* Name */}
              <span className="text-body flex-1 truncate text-gray-950">
                {contributor.name}
              </span>

              {/* Change */}
              <div className="flex shrink-0 items-center gap-1">
                <UpArrow />
                <span className="text-caption text-[#169941]">
                  {contributor.change}
                </span>
              </div>

              {/* Points */}
              <span className="text-body w-20 shrink-0 text-right font-mono text-gray-950">
                {contributor.points}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
