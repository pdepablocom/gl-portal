// Server component — no "use client" needed

interface BuilderStat {
  value: string;
  label: string;
  change: string;
}

const builderStats: BuilderStat[] = [
  { value: "1897", label: "Builders", change: "12" },
  { value: "160040", label: "Total points earned", change: "1847" },
  { value: "87", label: "Total Contributions", change: "4" },
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
        stroke="#6b6b6b"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BuilderStatCards() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">
          Builder&apos;s Live Dashboard
        </h2>
        <p className="text-body-regular text-gray-500">
          What&apos;s going on today in GenLayer?
        </p>
      </div>

      {/* Cards row */}
      <div className="flex w-full gap-3">
        {builderStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 items-center gap-0 overflow-hidden rounded-xl border border-gray-150 bg-white shadow-card"
            style={{ height: "80px" }}
          >
            {/* Left: builder role icon area */}
            <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "var(--color-role-builder-bg)" }}
              >
                {/* Builder hammer icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 17L8.5 12M12.5 3L17 7.5L14.5 10L10 5.5L12.5 3Z"
                    stroke="#e99322"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 12L10 10.5"
                    stroke="#e99322"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Center: stat + label */}
            <div className="flex flex-1 flex-col justify-center gap-0.5 py-3">
              <span className="text-stat text-gray-950">{stat.value}</span>
              <span className="text-label text-gray-500">{stat.label}</span>
            </div>

            {/* Right: change indicator */}
            <div className="flex shrink-0 items-center gap-1 pr-4">
              <UpArrow />
              <span className="text-caption text-gray-500">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
