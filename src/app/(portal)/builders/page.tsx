// Server component — no "use client" directive

import HeroFeaturedCard from "@/components/dashboard/HeroFeaturedCard";
import BuilderStatCards from "@/components/dashboard/BuilderStatCards";
import TopContributorsTable from "@/components/dashboard/TopContributorsTable";
import MonthlyPodium from "@/components/MonthlyPodium";
import ShowcaseGrid from "@/components/dashboard/ShowcaseGrid";
import ContributionCards from "@/components/dashboard/ContributionCards";
import CTASection from "@/components/CTASection";

// ── Newest Builders data ─────────────────────────────────
interface NewestBuilder {
  name: string;
  date: string;
}

const newestBuilders: NewestBuilder[] = [
  { name: "cognocracy", date: "24 Feb 2026" },
  { name: "devblock42", date: "23 Feb 2026" },
  { name: "raskovsky", date: "22 Feb 2026" },
  { name: "chainsmith", date: "21 Feb 2026" },
  { name: "nullpointer", date: "20 Feb 2026" },
];

// ── Recent Contributions data ────────────────────────────
interface RecentContributor {
  name: string;
  initials: string;
  points: string;
}

const recentContributors: RecentContributor[] = [
  { name: "wingston", initials: "WI", points: "680GP" },
  { name: "codeweaver", initials: "CW", points: "486GP" },
  { name: "nitup", initials: "NI", points: "449GP" },
  { name: "brucepain33", initials: "BP", points: "326GP" },
  { name: "stacksurfer", initials: "SS", points: "221GP" },
  { name: "postmanpat", initials: "PP", points: "189GP" },
  { name: "chinchon", initials: "CH", points: "76GP" },
];

// ── Featured Builds data ─────────────────────────────────
const featuredBuilds = [
  { title: "Argue.fun", author: "cognocracy" },
  { title: "Internet Court", author: "raskovsky" },
  { title: "Rally", author: "GenLayer" },
];

// ── Small inline SVG arrows ──────────────────────────────
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

// ── Newest Builder card ──────────────────────────────────
function NewestBuilderCard({ builder }: { builder: NewestBuilder }) {
  // derive initials from name
  const initials = builder.name
    .split(/[\s_]/)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

  return (
    <div
      className="flex w-56 shrink-0 items-center gap-3 rounded-xl border border-gray-150 bg-white px-4"
      style={{ height: "80px" }}
    >
      {/* Avatar */}
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--color-role-builder-bg)" }}
        aria-hidden="true"
      >
        <span
          className="font-heading text-[13px] font-medium"
          style={{ color: "var(--color-role-builder)" }}
        >
          {initials}
        </span>
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-body truncate text-gray-950">{builder.name}</span>
        <span className="text-caption text-gray-400">{builder.date}</span>
      </div>

      {/* Builder role dot */}
      <div
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--color-role-builder-bg)" }}
        aria-label="Builder"
      >
        <div
          className="h-2 w-2 rounded-full"
          style={{ background: "var(--color-role-builder)" }}
        />
      </div>
    </div>
  );
}

// ── Recent Contribution contributor card ─────────────────
function RecentContributorCard({
  contributor,
}: {
  contributor: RecentContributor;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 rounded-xl border border-gray-150 bg-white px-4"
      style={{ width: "240px", height: "80px" }}
    >
      {/* Avatar */}
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{
          background: "var(--color-role-builder-bg)",
          border: "1.5px solid rgba(233,147,34,0.2)",
        }}
        aria-hidden="true"
      >
        <span
          className="font-heading text-[12px] font-medium"
          style={{ color: "var(--color-role-builder)" }}
        >
          {contributor.initials}
        </span>
      </div>

      {/* Name + points */}
      <div className="flex flex-1 flex-col justify-center gap-0.5 min-w-0">
        <span className="text-body truncate text-gray-950">
          {contributor.name}
        </span>
        <div className="flex items-center gap-1">
          <UpArrow />
          <span className="text-body-regular text-gray-500">
            {contributor.points}
          </span>
        </div>
      </div>

      {/* Builder role dot */}
      <div
        className="h-6 w-6 shrink-0 rounded-full"
        style={{ background: "var(--color-role-builder)" }}
        aria-label="Builder"
      />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function BuildersPage() {
  return (
    <>
      {/* 1. Hero Featured Card */}
      <HeroFeaturedCard
        author="By cognocracy"
        title="Builders Hub"
        description="Deploy Intelligent Contracts, run validators and participate in Optimistic Democracy on GenVM. Earn GP for every verified contribution."
        ctaLabel="Start building →"
        ctaHref="#"
      />

      {/* 2. Builder's Live Dashboard — 3 stat cards */}
      <BuilderStatCards />

      {/* 3. Top Contributors + Monthly Podium — two-column layout */}
      <div className="flex w-full items-start gap-6">
        {/* Left (~60%): top contributors table */}
        <div className="flex-[3] min-w-0">
          <TopContributorsTable />
        </div>

        {/* Right (~40%): monthly podium */}
        <div className="flex-[2] flex flex-col gap-4 min-w-0">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-section-title text-gray-950">
              This month&apos;s Podium
            </h2>
            <p className="text-body-regular text-gray-500">
              What&apos;s going on today in GenLayer?
            </p>
          </div>
          <MonthlyPodium />
        </div>
      </div>

      {/* 4. Newest Builders — horizontal avatar row */}
      <div className="flex w-full flex-col gap-4">
        {/* Section header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-section-title text-gray-950">
              Newest builders
            </h2>
            <p className="text-body-regular text-gray-500">New</p>
          </div>

          <a
            href="#"
            className="text-body-regular shrink-0 text-gray-500 transition-colors hover:text-gray-950"
          >
            View all &rarr;
          </a>
        </div>

        {/* Builder cards row */}
        <div className="flex w-full gap-3 overflow-x-auto pb-1">
          {newestBuilders.map((builder) => (
            <NewestBuilderCard key={builder.name} builder={builder} />
          ))}
        </div>
      </div>

      {/* 5. Featured Builds */}
      <ShowcaseGrid
        title="Featured Builds"
        subtitle="This month curated builds"
        items={featuredBuilds}
      />

      {/* 6. Recent Contributions — horizontal contributor row */}
      <div className="flex w-full flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-section-title text-gray-950">
              Recent Contributions
            </h2>
            <p className="text-body-regular text-gray-500">
              Highest Builder Points Contributions this week
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
        <div className="flex w-full gap-[10px] overflow-x-auto pb-1">
          {recentContributors.map((contributor) => (
            <RecentContributorCard
              key={contributor.name}
              contributor={contributor}
            />
          ))}
        </div>
      </div>

      {/* 7. Highlighted Contributions */}
      <ContributionCards />

      {/* 8. CTA Section */}
      <CTASection />
    </>
  );
}
