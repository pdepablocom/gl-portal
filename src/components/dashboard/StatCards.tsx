const stats = [
  { value: "1,856", label: "Total points earned", change: "1847" },
  { value: "1,897", label: "Builders", change: "7" },
  { value: "87", label: "Validators", change: "1" },
  { value: "5,973", label: "Community members", change: "42" },
];

export default function StatCards() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">GenLayer Live</h2>
        <p className="text-body-regular text-gray-500">
          What&apos;s going on today in GenLayer?
        </p>
      </div>

      {/* Cards row */}
      <div className="flex w-full gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 items-center gap-0 rounded-xl border border-gray-150 bg-white shadow-card overflow-hidden"
            style={{ height: "80px" }}
          >
            {/* Left: icon area */}
            <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end" />
            </div>

            {/* Center: stat + label */}
            <div className="flex flex-1 flex-col justify-center gap-0.5 py-3">
              <span className="text-stat text-gray-950">{stat.value}</span>
              <span className="text-label text-gray-500">{stat.label}</span>
            </div>

            {/* Right: change indicator */}
            <div className="flex shrink-0 items-center gap-1 pr-4">
              {/* Up arrow */}
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
              <span className="text-caption text-gray-500">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
