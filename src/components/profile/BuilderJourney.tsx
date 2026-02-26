"use client";

import { useState } from "react";

interface JourneyStep {
  id: string;
  label: string;
  completed: boolean;
  actionLabel?: string;
}

const initialSteps: JourneyStep[] = [
  { id: "wallet", label: "Connect your wallet", completed: true },
  { id: "first-points", label: "Earn your first points", completed: true },
  { id: "github", label: "Connect your GitHub", completed: true },
  { id: "bridgekeeper", label: "Start the BridgeKeeper repo", completed: false, actionLabel: "Start Repo" },
  { id: "ai-asimov", label: "AI Asimov Network", completed: false, actionLabel: "Add Network" },
  { id: "testnet-gen", label: "Top-up with Testnet GEN", completed: false, actionLabel: "Get Tokens" },
  { id: "studio-network", label: "At the Studio Network", completed: false, actionLabel: "Add Network" },
  { id: "deploy-contract", label: "Deploy your first contract", completed: false, actionLabel: "Open Studio" },
];

const builderStats = [
  { value: "1897", label: "Total builder points" },
  { value: "4", label: "Total Contributions" },
  { value: "#7", label: "Builder Rank" },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#169941" />
      <path
        d="M5.5 10L8.5 13L14.5 7"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmptyCircle() {
  return (
    <div className="h-5 w-5 shrink-0 rounded-full border-2 border-gray-200 bg-white" />
  );
}

export default function BuilderJourney() {
  const [steps] = useState<JourneyStep[]>(initialSteps);

  const completedCount = steps.filter((s) => s.completed).length;
  const totalCount = steps.length;

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Stats row */}
      <div className="flex w-full gap-3">
        {builderStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-start gap-1 rounded-xl border border-gray-150 bg-white px-5 py-4 shadow-card"
          >
            <span className="text-stat text-gray-950">{stat.value}</span>
            <span className="text-label text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Journey card */}
      <div className="flex w-full flex-col rounded-xl border border-gray-150 bg-white shadow-card">
        {/* Card header */}
        <div className="flex items-center justify-between border-b border-gray-150 px-6 py-5">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-section-title text-gray-950">
              Complete your builder journey
            </h3>
            <p className="text-body-regular text-gray-500">
              {completedCount} of {totalCount} steps completed
            </p>
          </div>
          {/* Progress fraction */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-150">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
            <span className="text-caption text-gray-500">
              {completedCount}/{totalCount}
            </span>
          </div>
        </div>

        {/* Steps list */}
        <div className="flex flex-col divide-y divide-gray-150">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="flex items-center gap-3">
                {step.completed ? <CheckIcon /> : <EmptyCircle />}
                <span
                  className={`text-body ${
                    step.completed ? "text-gray-500 line-through" : "text-gray-950"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {!step.completed && step.actionLabel && (
                <button className="btn-secondary h-8 rounded-full px-4 text-sm">
                  {step.actionLabel}
                </button>
              )}

              {step.completed && (
                <span className="text-caption text-success-verified">
                  Connected
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-center border-t border-gray-150 px-6 py-5">
          <button className="btn-cta w-full max-w-sm">
            Complete Builder Journey
          </button>
        </div>
      </div>
    </div>
  );
}
