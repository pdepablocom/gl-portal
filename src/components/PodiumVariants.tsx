"use client";

import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

interface PodiumUser {
  rank: number;
  name: string;
  points: number;
  initials: string;
  avatarBg: string;
  avatarImg?: string;
}

const users: PodiumUser[] = [
  { rank: 1, name: "action", points: 12467, initials: "AC", avatarBg: "#131214", avatarImg: "/assets/ellipse-14.png" },
  { rank: 2, name: "BlockHunters", points: 11325, initials: "BH", avatarBg: "#131214" },
  { rank: 3, name: "luk", points: 9966, initials: "LU", avatarBg: "#e99322" },
];

/* ───────────────────── Variant Definitions ───────────────────── */

interface VariantTheme {
  name: string;
  description: string;
  cardBg: string;
  cardBorder: string;
  first: {
    barFrom: string;
    barTo: string;
    barBorder: string;
    rankColor: string;
    pointsColor: string;
    ringFrom: string;
    ringTo: string;
  };
  second: {
    barFrom: string;
    barTo: string;
    barBorder: string;
    rankColor: string;
    pointsColor: string;
  };
  third: {
    barFrom: string;
    barTo: string;
    barBorder: string;
    rankColor: string;
    pointsColor: string;
  };
  nameColor: string;
  labelColor: string;
}

const variants: VariantTheme[] = [
  {
    name: "Brand Purple",
    description: "Primary brand gradient. Recommended for portal.",
    cardBg: "#ffffff",
    cardBorder: "#f5f5f5",
    first: {
      barFrom: "#be8ff5",
      barTo: "#9e4bf6",
      barBorder: "rgba(158,75,246,0.3)",
      rankColor: "rgba(255,255,255,0.95)",
      pointsColor: "#9e4bf6",
      ringFrom: "#be8ff5",
      ringTo: "#9e4bf6",
    },
    second: {
      barFrom: "#f5f5f5",
      barTo: "#e6e6e6",
      barBorder: "#f0f0f0",
      rankColor: "#6b6b6b",
      pointsColor: "#6b6b6b",
    },
    third: {
      barFrom: "#f5f5f5",
      barTo: "#e6e6e6",
      barBorder: "#f0f0f0",
      rankColor: "#6b6b6b",
      pointsColor: "#6b6b6b",
    },
    nameColor: "#131214",
    labelColor: "#6b6b6b",
  },
  {
    name: "Gold / Orange",
    description: "Current Figma design. Warm, energetic feel.",
    cardBg: "#ffffff",
    cardBorder: "#f5f5f5",
    first: {
      barFrom: "#f8b93d",
      barTo: "#ee8d24",
      barBorder: "rgba(238,141,36,0.2)",
      rankColor: "rgba(245,245,245,0.9)",
      pointsColor: "#ee8521",
      ringFrom: "#f8b93d",
      ringTo: "#ee8d24",
    },
    second: {
      barFrom: "#f5f5f5",
      barTo: "#e6e6e6",
      barBorder: "#f7f7f7",
      rankColor: "#6b6b6b",
      pointsColor: "#ee8521",
    },
    third: {
      barFrom: "#f5f5f5",
      barTo: "#e6e6e6",
      barBorder: "#f7f7f7",
      rankColor: "#6b6b6b",
      pointsColor: "#ee8521",
    },
    nameColor: "#131214",
    labelColor: "#6b6b6b",
  },
  {
    name: "Dark Premium",
    description: "Dark bars with purple accent. Premium feel.",
    cardBg: "#131214",
    cardBorder: "#2a2a2c",
    first: {
      barFrom: "#be8ff5",
      barTo: "#9e4bf6",
      barBorder: "rgba(158,75,246,0.4)",
      rankColor: "rgba(255,255,255,0.95)",
      pointsColor: "#be8ff5",
      ringFrom: "#be8ff5",
      ringTo: "#9e4bf6",
    },
    second: {
      barFrom: "#2a2a2c",
      barTo: "#1e1e20",
      barBorder: "#3a3a3c",
      rankColor: "#656567",
      pointsColor: "#656567",
    },
    third: {
      barFrom: "#2a2a2c",
      barTo: "#1e1e20",
      barBorder: "#3a3a3c",
      rankColor: "#656567",
      pointsColor: "#656567",
    },
    nameColor: "#ffffff",
    labelColor: "#656567",
  },
  {
    name: "Soft Purple",
    description: "Muted purple tones. Subtle, cohesive brand feel.",
    cardBg: "#faf8fe",
    cardBorder: "#ede5f9",
    first: {
      barFrom: "#c9a4f7",
      barTo: "#a66df3",
      barBorder: "rgba(166,109,243,0.3)",
      rankColor: "rgba(255,255,255,0.95)",
      pointsColor: "#9e4bf6",
      ringFrom: "#c9a4f7",
      ringTo: "#a66df3",
    },
    second: {
      barFrom: "#f3ecfc",
      barTo: "#ede5f9",
      barBorder: "#e5d9f5",
      rankColor: "#8d81e1",
      pointsColor: "#8d81e1",
    },
    third: {
      barFrom: "#f3ecfc",
      barTo: "#ede5f9",
      barBorder: "#e5d9f5",
      rankColor: "#8d81e1",
      pointsColor: "#8d81e1",
    },
    nameColor: "#131214",
    labelColor: "#6b6b6b",
  },
  {
    name: "Purple → Orange Gradient",
    description: "Uses the progress gradient. Dynamic, multicolor.",
    cardBg: "#ffffff",
    cardBorder: "#f5f5f5",
    first: {
      barFrom: "#a78af8",
      barTo: "#9e4bf6",
      barBorder: "rgba(158,75,246,0.3)",
      rankColor: "rgba(255,255,255,0.95)",
      pointsColor: "#9e4bf6",
      ringFrom: "#a78af8",
      ringTo: "#9e4bf6",
    },
    second: {
      barFrom: "#f8b93d",
      barTo: "#ee8d24",
      barBorder: "rgba(238,141,36,0.2)",
      rankColor: "rgba(255,255,255,0.9)",
      pointsColor: "#ee8521",
    },
    third: {
      barFrom: "#fa8736",
      barTo: "#e67020",
      barBorder: "rgba(250,135,54,0.2)",
      rankColor: "rgba(255,255,255,0.9)",
      pointsColor: "#e67020",
    },
    nameColor: "#131214",
    labelColor: "#6b6b6b",
  },
  {
    name: "Role Colors",
    description: "Each podium slot uses a different role color.",
    cardBg: "#ffffff",
    cardBorder: "#f5f5f5",
    first: {
      barFrom: "#be8ff5",
      barTo: "#8d81e1",
      barBorder: "rgba(141,129,225,0.3)",
      rankColor: "rgba(255,255,255,0.95)",
      pointsColor: "#8d81e1",
      ringFrom: "#be8ff5",
      ringTo: "#8d81e1",
    },
    second: {
      barFrom: "#f8b93d",
      barTo: "#e99322",
      barBorder: "rgba(233,147,34,0.2)",
      rankColor: "rgba(255,255,255,0.9)",
      pointsColor: "#e99322",
    },
    third: {
      barFrom: "#6ba0f6",
      barTo: "#4f76f6",
      barBorder: "rgba(79,118,246,0.2)",
      rankColor: "rgba(255,255,255,0.9)",
      pointsColor: "#4f76f6",
    },
    nameColor: "#131214",
    labelColor: "#6b6b6b",
  },
];

/* ───────────────────── Helpers ───────────────────── */

function fmt(n: number) {
  return n.toLocaleString();
}

/* ───────────────────── Color Swatch ───────────────────── */

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="h-3 w-3 rounded-sm border border-black/10"
        style={{ background: color }}
      />
      <span className="font-mono text-[10px] text-[#6b6b6b]">
        {label}: {color}
      </span>
    </div>
  );
}

/* ───────────────────── Single Podium Card ───────────────────── */

function PodiumCard({ theme }: { theme: VariantTheme }) {
  const displayOrder = [users[1], users[0], users[2]];

  const getConfig = (rank: number) => {
    if (rank === 1) return { ...theme.first, height: 160, avatarSize: 56 };
    if (rank === 2) return { ...theme.second, height: 108, avatarSize: 44, barBorder: theme.second.barBorder };
    return { ...theme.third, height: 72, avatarSize: 44, barBorder: theme.third.barBorder };
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Podium render */}
      <div
        className="flex h-[380px] w-[420px] flex-col items-center justify-end overflow-hidden rounded-lg border p-4 pb-0"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header label */}
        <span
          className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.44px]"
          style={{ color: theme.labelColor }}
        >
          Monthly Top Contributors
        </span>

        {/* Podium columns */}
        <div className="flex w-full flex-1 items-end justify-center gap-1.5">
          {displayOrder.map((user) => {
            const cfg = getConfig(user.rank);
            const isFirst = user.rank === 1;

            return (
              <div
                key={user.rank}
                className="flex flex-1 flex-col items-center"
              >
                {/* Avatar */}
                <div className="relative mb-2 flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full p-[2px]"
                    style={{
                      background: isFirst
                        ? `linear-gradient(to bottom, ${theme.first.ringFrom}, ${theme.first.ringTo})`
                        : `${theme.cardBorder}`,
                      width: cfg.avatarSize + 8,
                      height: cfg.avatarSize + 8,
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: cfg.avatarSize,
                        height: cfg.avatarSize,
                        backgroundColor: user.avatarBg,
                      }}
                    >
                      {user.avatarImg ? (
                        <Image
                          src={user.avatarImg}
                          alt={user.name}
                          width={cfg.avatarSize}
                          height={cfg.avatarSize}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <span
                          className="font-heading font-medium text-white"
                          style={{ fontSize: isFirst ? 16 : 13 }}
                        >
                          {user.initials}
                        </span>
                      )}
                    </div>
                  </div>

                  <p
                    className="mt-1.5 max-w-[100px] truncate text-center font-sans text-[13px] font-medium tracking-[0.26px]"
                    style={{ color: theme.nameColor }}
                  >
                    {user.name}
                  </p>
                  <p
                    className="mt-0.5 text-center font-sans text-[11px] font-medium tracking-[0.22px]"
                    style={{
                      color: isFirst
                        ? theme.first.pointsColor
                        : user.rank === 2
                          ? theme.second.pointsColor
                          : theme.third.pointsColor,
                    }}
                  >
                    {fmt(user.points)} GP
                  </p>
                </div>

                {/* Bar */}
                <div
                  className="relative flex w-full items-start justify-center rounded-t-lg border pt-3"
                  style={{
                    height: cfg.height,
                    background: `linear-gradient(to bottom, ${
                      isFirst
                        ? `${theme.first.barFrom}, ${theme.first.barTo}`
                        : user.rank === 2
                          ? `${theme.second.barFrom}, ${theme.second.barTo}`
                          : `${theme.third.barFrom}, ${theme.third.barTo}`
                    })`,
                    borderColor: isFirst
                      ? theme.first.barBorder
                      : user.rank === 2
                        ? theme.second.barBorder
                        : theme.third.barBorder,
                  }}
                >
                  <span
                    className="font-heading text-[24px] font-medium tracking-[-0.96px]"
                    style={{
                      color: isFirst
                        ? theme.first.rankColor
                        : user.rank === 2
                          ? theme.second.rankColor
                          : theme.third.rankColor,
                    }}
                  >
                    {user.rank}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Variant label + specs */}
      <div className="flex flex-col gap-2 pl-1">
        <h3 className="font-heading text-[20px] font-medium tracking-[-0.4px] text-black">
          {theme.name}
        </h3>
        <p className="font-sans text-[13px] tracking-[0.26px] text-[#6b6b6b]">
          {theme.description}
        </p>
        <div className="mt-1 flex flex-col gap-1">
          <Swatch color={theme.first.barFrom} label="1st bar from" />
          <Swatch color={theme.first.barTo} label="1st bar to" />
          <Swatch color={theme.first.pointsColor} label="1st points" />
          <Swatch color={theme.second.barFrom} label="2nd bar from" />
          <Swatch color={theme.second.barTo} label="2nd bar to" />
          <Swatch color={theme.third.barFrom} label="3rd bar from" />
          <Swatch color={theme.third.barTo} label="3rd bar to" />
          <Swatch color={theme.cardBg} label="Card bg" />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── Grid ───────────────────── */

export default function PodiumVariants() {
  return (
    <div className="grid grid-cols-3 gap-10">
      {variants.map((v) => (
        <PodiumCard key={v.name} theme={v} />
      ))}
    </div>
  );
}
