// Server component — no "use client" needed

type Role = "builder" | "validator" | "community";

interface Contributor {
  name: string;
  points: string;
  role: Role;
}

const contributors: Contributor[] = [
  { name: "wingston", points: "680BP", role: "builder" },
  { name: "vaguetecruasan", points: "486VP", role: "validator" },
  { name: "nitup", points: "449XP", role: "community" },
  { name: "brucepain33", points: "326BP", role: "builder" },
  { name: "pizzamaster300", points: "221VP", role: "validator" },
  { name: "postmanpat", points: "189XP", role: "community" },
  { name: "chinchon", points: "76BP", role: "builder" },
];

const roleDotColor: Record<Role, string> = {
  builder: "bg-[#e99322]",
  validator: "bg-[#4f76f6]",
  community: "bg-[#8d81e1]",
};

export default function TrendingContributors() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-section-title text-gray-950">
            Trending Contributors
          </h2>
          <p className="text-body-regular text-gray-500">
            Highest GenLayer Points Contributions this week
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-body-regular text-gray-500 transition-colors hover:text-gray-950"
        >
          View all
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Contributor cards row */}
      <div className="flex w-full overflow-x-auto gap-[10px] pb-1">
        {contributors.map((contributor) => (
          <div
            key={contributor.name}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-gray-150 bg-white px-4"
            style={{ width: "240px", height: "80px" }}
          >
            {/* Avatar */}
            <div className="h-12 w-12 shrink-0 rounded-full bg-gray-200" />

            {/* Name + points */}
            <div className="flex flex-1 flex-col justify-center gap-0.5 min-w-0">
              <span className="text-body text-gray-950 truncate">
                {contributor.name}
              </span>
              <div className="flex items-center gap-1">
                {/* Down arrow icon */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6"
                    stroke="#6b6b6b"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-body-regular text-gray-500">
                  {contributor.points}
                </span>
              </div>
            </div>

            {/* Role badge dot */}
            <div
              className={`h-6 w-6 shrink-0 rounded-full ${roleDotColor[contributor.role]}`}
              aria-label={contributor.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
