import Image from "next/image";
import BuilderJourney from "@/components/profile/BuilderJourney";
import RankingTable from "@/components/profile/RankingTable";

// ── Shared helpers ─────────────────────────────────────────────────────────

function UpArrowSmall({ color = "#6b6b6b" }: { color?: string }) {
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
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Settings"
    >
      <path
        d="M8 10a2 2 0 100-4 2 2 0 000 4z"
        stroke="#6b6b6b"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 10a1.1 1.1 0 00.22 1.213l.04.04a1.333 1.333 0 11-1.886 1.886l-.04-.04A1.1 1.1 0 0010.453 13a1.1 1.1 0 00-1.12 1.1v.113a1.333 1.333 0 11-2.667 0v-.06A1.1 1.1 0 005.553 13a1.1 1.1 0 00-1.213.22l-.04.04A1.333 1.333 0 112.414 11.374l.04-.04A1.1 1.1 0 003 10.453a1.1 1.1 0 00-1.1-1.12H1.787a1.333 1.333 0 110-2.667h.06A1.1 1.1 0 003 5.553a1.1 1.1 0 00-.22-1.213l-.04-.04A1.333 1.333 0 114.626 2.414l.04.04A1.1 1.1 0 005.547 3a1.1 1.1 0 001.12-1.1V1.787a1.333 1.333 0 112.667 0v.06A1.1 1.1 0 0010.447 3a1.1 1.1 0 001.213-.22l.04-.04a1.333 1.333 0 111.886 1.886l-.04.04A1.1 1.1 0 0013 5.547a1.1 1.1 0 001.1 1.12h.113a1.333 1.333 0 110 2.667h-.06A1.1 1.1 0 0013.333 10z"
        stroke="#6b6b6b"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Section: Profile Header ─────────────────────────────────────────────────

function ProfileHeader() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative h-40 w-full overflow-hidden rounded-t-xl bg-gradient-to-r from-gray-900 via-purple-deep to-brand-purple">
        {/* Purple glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(158,75,246,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(141,129,225,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Noise overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        {/* Top-right actions */}
        <div className="absolute right-5 top-4 flex items-center gap-3">
          <a
            href="#"
            className="text-body-regular text-white/70 transition-colors hover:text-white"
          >
            Edit profile
          </a>
          <button
            aria-label="Settings"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20"
          >
            <GearIcon />
          </button>
        </div>
      </div>

      {/* Below-banner: avatar + identity */}
      <div className="flex w-full items-start justify-between rounded-b-xl border border-t-0 border-gray-150 bg-white px-6 pb-5 pt-0">
        {/* Avatar overlapping banner */}
        <div className="flex flex-col gap-3">
          <div className="-mt-12">
            <div
              className="h-24 w-24 rounded-full border-4 border-white bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end shadow-card"
              aria-label="User avatar"
            />
          </div>

          {/* Name + role badges */}
          <div className="flex items-center gap-2">
            <h1 className="text-h2 text-gray-950">wingston</h1>
            {/* Role badge dots */}
            <div className="flex items-center gap-1.5">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{ background: "rgba(233,147,34,0.15)" }}
                title="Builder"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "#e99322" }}
                />
              </span>
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{ background: "rgba(79,118,246,0.12)" }}
                title="Validator"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "#4f76f6" }}
                />
              </span>
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{ background: "#f4f2fc" }}
                title="Community"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "#8d81e1" }}
                />
              </span>
            </div>
          </div>

          {/* Meta: wallet + username + bio */}
          <div className="flex flex-wrap items-center gap-3 text-body-regular text-gray-500">
            <span className="font-mono text-sm">0xWings0n5hy...</span>
            <span className="text-gray-300">|</span>
            <span>wingston</span>
            <span className="text-gray-300">|</span>
            <span>wing wing wing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section: Profile Stats ──────────────────────────────────────────────────

const profileStats = [
  { value: "4532", label: "GP Points", change: "+1897" },
  { value: "122", label: "Total Contributions", change: "+1" },
  { value: "Feb 26", label: "Builder Name", change: "+125" },
];

function ProfileStats() {
  return (
    <div className="flex w-full gap-3">
      {profileStats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-1 items-center gap-0 overflow-hidden rounded-xl border border-gray-150 bg-white shadow-card"
          style={{ height: "80px" }}
        >
          {/* Icon area */}
          <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end" />
          </div>

          {/* Stat + label */}
          <div className="flex flex-1 flex-col justify-center gap-0.5 py-3">
            <span className="text-stat text-gray-950">{stat.value}</span>
            <span className="text-label text-gray-500">{stat.label}</span>
          </div>

          {/* Change */}
          <div className="flex shrink-0 items-center gap-1 pr-4">
            <UpArrowSmall color="#169941" />
            <span className="text-caption text-success-verified">
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section: Empty State ────────────────────────────────────────────────────

function EmptyStateSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">{title}</h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-gray-150 bg-white py-12 shadow-card">
        {/* Empty state icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-125">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2a10 10 0 110 20A10 10 0 0112 2zm0 2a8 8 0 100 16A8 8 0 0012 4zm0 3a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm0 8a1 1 0 110 2 1 1 0 010-2z"
              fill="#ababab"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-body text-gray-950">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">View active waitlist</button>
          <button className="btn-primary">Submit contribution</button>
        </div>
      </div>
    </div>
  );
}

// ── Section: Validator Waitlist ─────────────────────────────────────────────

function ValidatorWaitlist() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Validator Waitlist</h2>
      </div>
      <div className="flex w-full items-center gap-6 rounded-xl border border-gray-150 bg-white p-6 shadow-card">
        {/* Icon */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(79,118,246,0.12)" }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
              stroke="#4f76f6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-h3 text-gray-950">Validator Waitlist</h3>
          <p className="text-body-regular text-gray-500">
            Deploy intelligent contracts with Optimistic Democracy. Run nodes
            with diverse AI models to reach consensus on GenLayer.
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button className="btn-secondary">View active waitlist</button>
          <button className="btn-primary">Submit contribution</button>
        </div>
      </div>
    </div>
  );
}

// ── Section: Referral Program ───────────────────────────────────────────────

function ReferralProgram() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Referral Program</h2>
      </div>
      <div
        className="flex w-full items-center gap-6 overflow-hidden rounded-xl border border-gray-150 bg-white shadow-card"
        style={{ borderLeft: "4px solid #e99322" }}
      >
        <div className="flex flex-1 flex-col gap-2 px-6 py-5">
          <h3 className="text-h3 text-gray-950">Invite and earn forever.</h3>
          <p className="text-body-regular text-gray-500">
            Earn 10% of all GenLayer Points your referrals accumulate — forever.
            Share your link, grow the ecosystem, and get rewarded for every
            builder, validator, and community member you bring in.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <button className="btn-primary flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.333 4h-2A1.333 1.333 0 002 5.333v7.334A1.333 1.333 0 003.333 14h7.334A1.333 1.333 0 0012 12.667v-2M10.667 2H14v3.333M8.667 7.333L14 2"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Referral Link
            </button>
          </div>
        </div>

        {/* Decorative warm gradient panel */}
        <div
          className="flex h-full w-32 shrink-0 items-center justify-center self-stretch"
          style={{
            background:
              "linear-gradient(135deg, rgba(233,147,34,0.12) 0%, rgba(250,135,54,0.08) 100%)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              stroke="#e99322"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Section: Your Journeys (mini role cards) ────────────────────────────────

const journeyRoles = [
  {
    key: "builder",
    title: "Builder",
    description:
      "Deploy Intelligent Contracts and contribute repos to earn builder points.",
    badge: "/assets/builder-badge.svg",
    illustration: "/assets/group-7.svg",
    primaryBtn: "Builder's Welcome",
    secondaryBtn: "Learn more",
    accentColor: "#e99322",
    accentBg: "rgba(233,147,34,0.10)",
  },
  {
    key: "validator",
    title: "Validator",
    description:
      "Run nodes with diverse AI models, reach consensus, and validate GenLayer transactions.",
    badge: "/assets/validator-badge.svg",
    illustration: "/assets/group-9.svg",
    primaryBtn: "Join the waitlist",
    secondaryBtn: "Learn more",
    accentColor: "#4f76f6",
    accentBg: "rgba(79,118,246,0.10)",
  },
  {
    key: "community",
    title: "Community",
    description:
      "Contribute through content, outreach, and engagement to grow the ecosystem.",
    badge: "/assets/community-badge.svg",
    illustration: "/assets/polygon-7.svg",
    primaryBtn: "Join Discord",
    secondaryBtn: "Learn more",
    accentColor: "#8d81e1",
    accentBg: "#f4f2fc",
  },
];

function YourJourneys() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-section-title text-gray-950">Your Journeys</h2>
        <p className="text-body-regular text-gray-500">
          Pick your path — you can always take on more roles later.
        </p>
      </div>

      <div className="flex w-full items-stretch gap-3">
        {journeyRoles.map((role) => (
          <div
            key={role.key}
            className="flex flex-1 flex-col rounded-lg border border-gray-150 bg-white shadow-card"
          >
            {/* Illustration area */}
            <div className="relative flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-t-lg border-b border-gray-150">
              <Image
                src={role.illustration}
                alt=""
                width={300}
                height={120}
                className="absolute left-0 top-6 h-[120px] w-auto"
              />
              <Image
                src={role.badge}
                alt={role.title}
                width={56}
                height={56}
                className="relative z-10"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: role.accentColor }}
                  />
                  <h3 className="text-body font-medium text-gray-950">
                    {role.title}
                  </h3>
                </div>
                <p className="text-body-regular text-gray-500">
                  {role.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-2">
                <button className="btn-primary w-full">
                  {role.primaryBtn}
                </button>
                <button className="btn-secondary w-full">
                  {role.secondaryBtn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: CTA Footer ─────────────────────────────────────────────────────

function ProfileCTAFooter() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl px-8 py-16">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900" />

      {/* Purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(158,75,246,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(141,129,225,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-display-xl text-white">
          Keep building, Wingston
        </h2>
        <p className="text-body-lg max-w-lg text-white/60">
          Invite other builders and validators to GenLayer. Earn 10% of their
          points — forever.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <button className="btn-cta flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.333 4h-2A1.333 1.333 0 002 5.333v7.334A1.333 1.333 0 003.333 14h7.334A1.333 1.333 0 0012 12.667v-2M10.667 2H14v3.333M8.667 7.333L14 2"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Referral link
          </button>
          <button className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-body text-white transition-colors hover:bg-white/15">
            Read the Docs
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  return (
    <div className="flex w-full flex-col gap-6 pb-10">
      {/* 1. Profile Header Banner + identity */}
      <ProfileHeader />

      {/* 2. Profile Stats */}
      <ProfileStats />

      {/* 3. Ranking Table */}
      <RankingTable />

      {/* 4. Builder Journey */}
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-section-title text-gray-950">Builder Journey</h2>
          <p className="text-body-regular text-gray-500">
            Track your progress as a builder in the GenLayer ecosystem.
          </p>
        </div>
        <BuilderJourney />
      </div>

      {/* 5. Highlights (empty state) */}
      <EmptyStateSection
        title="Highlights"
        description="No contributions yet! Submit your work to start earning points."
      />

      {/* 6. Recent Contributions (empty state) */}
      <EmptyStateSection
        title="Recent Contributions"
        description="No contributions yet! Submit your work to start earning points."
      />

      {/* 7. Validator Waitlist */}
      <ValidatorWaitlist />

      {/* 8. Referral Program */}
      <ReferralProgram />

      {/* 9. Your Journeys */}
      <YourJourneys />

      {/* 10. CTA Footer */}
      <ProfileCTAFooter />
    </div>
  );
}
