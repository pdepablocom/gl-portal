// Server component — no "use client" needed

interface Contribution {
  user: string;
  title: string;
  desc: string;
  points: string;
  category: string;
  date: string;
}

const contributions: Contribution[] = [
  {
    user: "action",
    title: "Community Content Curation Discord Bot",
    desc: "A custom Discord bot that curates high-quality submissions through community voting...",
    points: "500 pts",
    category: "Community Building",
    date: "Jan 13, 2026",
  },
  {
    user: "BlockHunters",
    title: "A review of GenLayer's last year",
    desc: "It's amazing to see how far we've come, condensed in a great article.",
    points: "160 pts",
    category: "Blog Post",
    date: "Jan 13, 2026",
  },
  {
    user: "luk",
    title: "December Hackathon Winner!",
    desc: "This wonderful contribution from @luk was made in preparation for DevConnect...",
    points: "1000 pts",
    category: "Projects and Milestones",
    date: "Jan 13, 2026",
  },
  {
    user: "VjnNodes",
    title: "Caught in the Act",
    desc: "Wolfgang spotted us shipping the new points system straight to production...",
    points: "20 pts",
    category: "Educational Content",
    date: "Jan 13, 2026",
  },
];

export default function ContributionCards() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-section-title text-gray-950">
            Highlighted Contributions
          </h2>
          <p className="text-body-regular text-gray-500">
            Top accepted contributions from the ecosystem
          </p>
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
      <div className="flex w-full overflow-x-auto gap-[10px] pb-1">
        {contributions.map((contribution, index) => (
          <div
            key={`${contribution.user}-${index}`}
            className="flex shrink-0 flex-col justify-between rounded-lg border border-gray-150 bg-white p-4"
            style={{ width: "300px", height: "180px" }}
          >
            {/* Top row: avatar + username + points badge */}
            <div className="flex items-center gap-2">
              {/* Avatar placeholder */}
              <div className="h-6 w-6 shrink-0 rounded-full bg-gray-200" />
              <span className="text-body text-gray-950 flex-1 truncate">
                {contribution.user}
              </span>
              {/* Points badge */}
              <div className="shrink-0 rounded-full bg-gray-125 px-2 py-1">
                <span className="text-caption text-gray-500">
                  {contribution.points}
                </span>
              </div>
            </div>

            {/* Middle: title + description */}
            <div className="flex flex-col gap-1">
              <p className="text-body font-medium text-gray-950 line-clamp-1">
                {contribution.title}
              </p>
              <p className="text-body-regular text-gray-500 line-clamp-2">
                {contribution.desc}
              </p>
            </div>

            {/* Bottom row: category tag + date */}
            <div className="flex items-center justify-between">
              {/* Category tag */}
              <div className="rounded-full bg-gray-125 px-2 py-1">
                <span className="text-caption text-gray-500">
                  {contribution.category}
                </span>
              </div>
              {/* Date */}
              <span className="text-label text-gray-400">{contribution.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
