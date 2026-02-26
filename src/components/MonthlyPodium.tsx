"use client";

import Image from "next/image";

interface PodiumUser {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  initials: string;
  avatarBg: string;
}

const topUsers: PodiumUser[] = [
  {
    rank: 1,
    name: "action",
    points: 12467,
    avatar: "/assets/ellipse-14.png",
    initials: "AC",
    avatarBg: "#131214",
  },
  {
    rank: 2,
    name: "BlockHunters",
    points: 11325,
    avatar: "",
    initials: "BH",
    avatarBg: "#131214",
  },
  {
    rank: 3,
    name: "luk",
    points: 9966,
    avatar: "",
    initials: "LU",
    avatarBg: "#e99322",
  },
];

// Display order: 2nd, 1st, 3rd
const podiumOrder = [topUsers[1], topUsers[0], topUsers[2]];

const podiumConfig: Record<
  number,
  {
    height: string;
    avatarSize: number;
    ringSize: string;
    barGradient: string;
    barBorder: string;
    crownVisible: boolean;
  }
> = {
  1: {
    height: "h-[160px]",
    avatarSize: 72,
    ringSize: "w-[84px] h-[84px]",
    barGradient:
      "bg-gradient-to-b from-[#be8ff5] to-[#9e4bf6]",
    barBorder: "border-[#9e4bf6]/30",
    crownVisible: true,
  },
  2: {
    height: "h-[120px]",
    avatarSize: 56,
    ringSize: "w-[68px] h-[68px]",
    barGradient: "bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6]",
    barBorder: "border-[#e6e6e6]",
    crownVisible: false,
  },
  3: {
    height: "h-[96px]",
    avatarSize: 56,
    ringSize: "w-[68px] h-[68px]",
    barGradient: "bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6]",
    barBorder: "border-[#e6e6e6]",
    crownVisible: false,
  },
};

function formatPoints(points: number): string {
  return points.toLocaleString();
}

function PodiumSlot({ user }: { user: PodiumUser }) {
  const config = podiumConfig[user.rank];
  const isFirst = user.rank === 1;

  return (
    <div className="flex flex-1 flex-col items-center gap-0">
      {/* Avatar area */}
      <div className="relative mb-3 flex flex-col items-center">
        {/* Crown for 1st place */}
        {config.crownVisible && (
          <div className="mb-1 text-center text-[20px] leading-none">
            👑
          </div>
        )}

        {/* Avatar ring */}
        <div
          className={`relative flex items-center justify-center rounded-full ${config.ringSize} ${
            isFirst
              ? "bg-gradient-to-b from-[#be8ff5] to-[#9e4bf6] p-[3px]"
              : "border-2 border-[#e6e6e6] p-[2px]"
          }`}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: config.avatarSize,
              height: config.avatarSize,
              backgroundColor: user.avatarBg,
            }}
          >
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                width={config.avatarSize}
                height={config.avatarSize}
                className="rounded-full object-cover"
              />
            ) : (
              <span
                className={`font-heading font-medium text-white ${
                  isFirst ? "text-[20px]" : "text-[16px]"
                }`}
              >
                {user.initials}
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <p
          className={`mt-2 max-w-[120px] truncate text-center font-sans font-medium tracking-[0.28px] text-[#131214] ${
            isFirst ? "text-[15px]" : "text-[13px]"
          }`}
        >
          {user.name}
        </p>

        {/* Points */}
        <p
          className={`mt-0.5 text-center font-sans tracking-[0.24px] ${
            isFirst
              ? "text-[13px] font-medium text-[#9e4bf6]"
              : "text-[12px] font-normal text-[#6b6b6b]"
          }`}
        >
          {formatPoints(user.points)} GP
        </p>
      </div>

      {/* Podium bar */}
      <div
        className={`w-full rounded-t-lg border ${config.barBorder} ${config.barGradient} ${config.height} relative flex items-start justify-center pt-4`}
      >
        <span
          className={`font-heading font-medium ${
            isFirst
              ? "text-[28px] tracking-[-0.56px] text-white"
              : "text-[22px] tracking-[-0.44px] text-[#6b6b6b]"
          }`}
        >
          {user.rank}
        </span>

        {/* Subtle glow on 1st place bar */}
        {isFirst && (
          <div className="absolute -top-1 left-1/2 h-[2px] w-3/4 -translate-x-1/2 rounded-full bg-white/40" />
        )}
      </div>
    </div>
  );
}

export default function MonthlyPodium() {
  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-end overflow-hidden rounded-lg border border-[#f5f5f5] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex w-full items-center justify-center gap-2 pb-2 pt-5">
        <span className="font-sans text-[12px] font-medium uppercase tracking-[0.48px] text-[#6b6b6b]">
          Monthly Top Contributors
        </span>
      </div>

      {/* Podium */}
      <div className="flex w-full flex-1 items-end justify-center gap-1 px-6 pb-0">
        {podiumOrder.map((user) => (
          <PodiumSlot key={user.rank} user={user} />
        ))}
      </div>
    </div>
  );
}
