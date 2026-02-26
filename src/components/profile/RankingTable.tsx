"use client";

import { useState } from "react";

type TabKey = "overall" | "builders" | "validators" | "community";

interface RankRow {
  rank: number;
  name: string;
  change: string;
  value: string;
  isCurrentUser?: boolean;
}

const tableData: Record<TabKey, { rows: RankRow[]; statLabel: string; statValue: string }> = {
  overall: {
    statLabel: "Overall Points",
    statValue: "4,532",
    rows: [
      { rank: 1, name: "action", change: "+1847", value: "12,841" },
      { rank: 2, name: "BlockHunters", change: "+1299", value: "11,071" },
      { rank: 3, name: "luk", change: "+2189", value: "8,990" },
      { rank: 7, name: "wingston", change: "+125", value: "4,532", isCurrentUser: true },
    ],
  },
  builders: {
    statLabel: "Builder Points",
    statValue: "4,182",
    rows: [
      { rank: 1, name: "action", change: "+1847", value: "12,841" },
      { rank: 2, name: "BlockHunters", change: "+1299", value: "11,071" },
      { rank: 3, name: "luk", change: "+2189", value: "8,990" },
      { rank: 7, name: "wingston", change: "+125", value: "4,182", isCurrentUser: true },
    ],
  },
  validators: {
    statLabel: "Validator Points",
    statValue: "0",
    rows: [
      { rank: 1, name: "Colloseo Digital", change: "+1517", value: "21,907" },
      { rank: 2, name: "EnStage.io Med", change: "+1299", value: "20,936" },
      { rank: 3, name: "Economista x Protocol", change: "+1105", value: "16,682" },
      { rank: 7, name: "wingston", change: "+0", value: "0", isCurrentUser: true },
    ],
  },
  community: {
    statLabel: "Community Points",
    statValue: "350",
    rows: [
      { rank: 1, name: "Tomcat", change: "+1260", value: "10,067" },
      { rank: 2, name: "BurgerMike", change: "+751", value: "6,516" },
      { rank: 3, name: "BeaconRise", change: "+603", value: "4,410" },
      { rank: 7, name: "wingston", change: "+0", value: "350", isCurrentUser: true },
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "overall", label: "Overall" },
  { key: "builders", label: "Builders" },
  { key: "validators", label: "Validators" },
  { key: "community", label: "Community" },
];

function UpArrowGreen() {
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

export default function RankingTable() {
  const [activeTab, setActiveTab] = useState<TabKey>("builders");
  const { rows, statLabel, statValue } = tableData[activeTab];

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Your Rankings</h2>
        <p className="text-body-regular text-gray-500">
          See where you stand in the ecosystem
        </p>
      </div>

      <div className="flex w-full overflow-hidden rounded-xl border border-gray-150 bg-white shadow-card">
        {/* Left: tab + table */}
        <div className="flex flex-1 flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-150">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-4 py-3 text-body transition-colors ${
                  activeTab === tab.key
                    ? "border-b-2 border-gray-950 text-gray-950"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table rows */}
          <div className="flex flex-col divide-y divide-gray-150">
            {rows.map((row) => (
              <div
                key={`${row.rank}-${row.name}`}
                className={`flex h-12 items-center gap-3 px-4 ${
                  row.isCurrentUser ? "bg-gray-100" : ""
                }`}
              >
                {/* Rank */}
                <span className="text-caption w-8 shrink-0 text-gray-400">
                  #{row.rank}
                </span>

                {/* Avatar */}
                <div
                  className="h-7 w-7 shrink-0 rounded-full border"
                  style={{
                    background: row.isCurrentUser
                      ? "rgba(158,75,246,0.15)"
                      : "#f3f3f3",
                    borderColor: row.isCurrentUser
                      ? "rgba(158,75,246,0.3)"
                      : "#e6e6e6",
                  }}
                />

                {/* Name */}
                <span className="flex-1 truncate text-body text-gray-950">
                  {row.name}
                  {row.isCurrentUser && (
                    <span className="ml-2 text-caption text-brand-purple">
                      (you)
                    </span>
                  )}
                </span>

                {/* Change */}
                <div className="flex shrink-0 items-center gap-1">
                  <UpArrowGreen />
                  <span className="text-caption text-success-verified">
                    {row.change}
                  </span>
                </div>

                {/* Value */}
                <span className="text-body w-20 shrink-0 text-right text-gray-950">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: large stat panel */}
        <div className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 border-l border-gray-150 bg-gray-75 p-6">
          <span
            className="text-stat text-gray-950"
            style={{ fontSize: "40px", lineHeight: "1" }}
          >
            {statValue}
          </span>
          <span className="text-caption text-center text-gray-500">
            {statLabel}
          </span>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-caption text-success-verified">Rank #7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
