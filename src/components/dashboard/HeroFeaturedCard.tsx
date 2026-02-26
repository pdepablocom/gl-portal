// Server component — no "use client" needed

interface HeroFeaturedCardProps {
  author?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroFeaturedCard({
  author = "By cognocracy",
  title = "Argue.fun Launch",
  description =
    "Deploy intelligent contracts, run validators and participate in Optimistic Democracy on GenVM.",
  ctaLabel = "View project →",
  ctaHref = "#",
}: HeroFeaturedCardProps) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Subtle noise/grain overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Purple glow accent — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(158,75,246,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Purple glow accent — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(141,129,225,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Bottom-left content overlay */}
      <div className="absolute bottom-0 left-0 flex flex-col items-start gap-2 p-5">
        {/* Author line with verified badge */}
        <div className="flex items-center gap-1.5">
          <span className="text-label text-white/60">{author}</span>
          {/* Verified checkmark badge */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Verified"
          >
            <circle cx="7" cy="7" r="7" fill="#169941" />
            <path
              d="M4 7L6.2 9.5L10 5"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2
          className="font-heading text-[32px] font-medium leading-none tracking-tight text-white"
          style={{ letterSpacing: "-1.28px" }}
        >
          {title}
        </h2>

        {/* Description */}
        <p className="text-body-regular max-w-[520px] text-white/70">
          {description}
        </p>

        {/* CTA button */}
        <a
          href={ctaHref}
          className="mt-1 inline-flex h-10 items-center rounded-full bg-white px-4 text-body text-gray-900 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
