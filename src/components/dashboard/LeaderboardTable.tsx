"use client";

type Role = "builder" | "validator" | "community";

interface Contributor {
  rank: number;
  name: string;
  points: string;
  change: string;
}

const builders: Contributor[] = [
  { rank: 1, name: "action", points: "12841", change: "+1847" },
  { rank: 2, name: "BlockHunters", points: "11071", change: "+1299" },
  { rank: 3, name: "luk", points: "8990", change: "+2189" },
  { rank: 4, name: "VjnNodes", points: "6132", change: "+1104" },
  { rank: 5, name: "PostKillows", points: "4951", change: "+892" },
];

const validators: Contributor[] = [
  { rank: 1, name: "Colloseo Digital", points: "21907", change: "+1517" },
  { rank: 2, name: "EnStage.io Med", points: "20936P", change: "+1299" },
  { rank: 3, name: "Economista x Protocol", points: "16682P", change: "+1105" },
  { rank: 4, name: "Kernel Stacks", points: "8875P", change: "+893" },
  { rank: 5, name: "TxCraftes", points: "6189P", change: "+612" },
];

const community: Contributor[] = [
  { rank: 1, name: "Tomcat", points: "10067", change: "+1260" },
  { rank: 2, name: "BurgerMike", points: "6516P", change: "+751" },
  { rank: 3, name: "BeaconRise", points: "4410P", change: "+603" },
  { rank: 4, name: "JourneyJo", points: "3890P", change: "+521" },
  { rank: 5, name: "BigTrack", points: "2907P", change: "+450" },
];

const columns: { role: Role; label: string; data: Contributor[] }[] = [
  { role: "builder", label: "Builders", data: builders },
  { role: "validator", label: "Validators", data: validators },
  { role: "community", label: "Community", data: community },
];

const roleAccentColor: Record<Role, string> = {
  builder: "#e99322",
  validator: "#8d81e1",
  community: "#4f76f6",
};

const roleAvatarBg: Record<Role, string> = {
  builder: "rgba(233,147,34,0.10)",
  validator: "#f4f2fc",
  community: "rgba(79,118,246,0.10)",
};

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

function AvatarPlaceholder({ role, size = 32 }: { role: Role; size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: roleAvatarBg[role],
        border: `1.5px solid ${roleAccentColor[role]}22`,
      }}
    />
  );
}

interface ColumnProps {
  role: Role;
  label: string;
  data: Contributor[];
}

function LeaderboardColumn({ role, label, data }: ColumnProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* Column header */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="text-body font-medium"
          style={{ color: roleAccentColor[role] }}
        >
          {label}
        </span>
        <a
          href="#"
          className="text-body-regular text-gray-500 transition-colors hover:text-gray-950"
        >
          View all &rarr;
        </a>
      </div>

      {/* Table rows */}
      <div className="flex flex-col">
        {data.map((contributor, index) => {
          const isLast = index === data.length - 1;
          return (
            <div
              key={contributor.rank}
              className={[
                "flex h-12 items-center gap-3",
                !isLast ? "border-b border-gray-150" : "",
              ].join(" ")}
            >
              {/* Rank number */}
              <span
                className="text-caption w-8 shrink-0 text-gray-400"
                aria-label={`Rank ${contributor.rank}`}
              >
                #{contributor.rank}
              </span>

              {/* Avatar + username */}
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <AvatarPlaceholder role={role} size={32} />
                <span className="text-body truncate text-gray-950">
                  {contributor.name}
                </span>
              </div>

              {/* Points */}
              <span className="text-body shrink-0 font-mono text-gray-950">
                {contributor.points}
              </span>

              {/* Change indicator */}
              <div className="flex shrink-0 items-center gap-1">
                <UpArrow />
                <span className="text-caption text-[#169941]">
                  {contributor.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LeaderboardTable() {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">
          Top Point Contributors
        </h2>
        <p className="text-body-regular text-gray-500">
          Most points this month
        </p>
      </div>

      {/* Three-column layout */}
      <div className="flex w-full gap-6 rounded-xl border border-gray-150 bg-white px-6 py-5">
        {columns.map((col, index) => (
          <>
            <LeaderboardColumn
              key={col.role}
              role={col.role}
              label={col.label}
              data={col.data}
            />
            {/* Vertical divider between columns */}
            {index < columns.length - 1 && (
              <div className="w-px shrink-0 self-stretch bg-gray-150" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
