"use client";

import { useState } from "react";

type Role = "builder" | "validator" | "community";

interface Member {
  name: string;
  date: string;
  role: Role;
}

const allMembers: Member[] = [
  { name: "paco tilla", date: "13 Feb 2026", role: "builder" },
  { name: "wizardofoz", date: "13 Feb 2026", role: "validator" },
  { name: "armando casas", date: "13 Feb 2026", role: "validator" },
  { name: "juan19872", date: "13 Feb 2026", role: "community" },
  { name: "david", date: "13 Feb 2026", role: "builder" },
];

type Tab = "Overall" | "Builders" | "Validators" | "Community";

const tabs: Tab[] = ["Overall", "Builders", "Validators", "Community"];

const roleColors: Record<Role, { dot: string; bg: string }> = {
  builder: { dot: "#e99322", bg: "rgba(233,147,34,0.10)" },
  validator: { dot: "#4f76f6", bg: "rgba(79,118,246,0.10)" },
  community: { dot: "#8d81e1", bg: "#f4f2fc" },
};

function filterByTab(members: Member[], tab: Tab): Member[] {
  if (tab === "Overall") return members;
  if (tab === "Builders") return members.filter((m) => m.role === "builder");
  if (tab === "Validators") return members.filter((m) => m.role === "validator");
  if (tab === "Community") return members.filter((m) => m.role === "community");
  return members;
}

function RoleBadgeDot({ role }: { role: Role }) {
  const { dot, bg } = roleColors[role];
  return (
    <div
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      style={{ background: bg }}
      aria-label={role}
    >
      <div
        className="h-2 w-2 rounded-full"
        style={{ background: dot }}
      />
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div
      className="flex w-60 shrink-0 items-center gap-3 rounded-xl border border-gray-150 bg-white px-4"
      style={{ height: "80px" }}
    >
      {/* Avatar placeholder */}
      <div className="h-12 w-12 shrink-0 rounded-full bg-gray-150" />

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-body truncate text-gray-950">{member.name}</span>
        <span className="text-caption text-gray-400">{member.date}</span>
      </div>

      {/* Role dot badge */}
      <RoleBadgeDot role={member.role} />
    </div>
  );
}

export default function NewestMembers() {
  const [activeTab, setActiveTab] = useState<Tab>("Overall");

  const visible = filterByTab(allMembers, activeTab);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex items-start justify-between gap-4">
        {/* Left: title + subtitle + tabs */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-section-title text-gray-950">Newest members</h2>
            <p className="text-body-regular text-gray-500">New</p>
          </div>

          {/* Tab row */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={[
                    "flex h-9 items-center rounded-full px-3 text-body-regular transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-transparent text-gray-500 hover:bg-gray-100",
                  ].join(" ")}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: View all */}
        <a
          href="#"
          className="text-body-regular shrink-0 text-gray-500 transition-colors hover:text-gray-950"
        >
          View all &rarr;
        </a>
      </div>

      {/* Members row */}
      <div className="flex w-full gap-3 overflow-x-auto pb-1">
        {visible.length > 0 ? (
          visible.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))
        ) : (
          <p className="text-body-regular text-gray-400">No members found.</p>
        )}
      </div>
    </div>
  );
}
