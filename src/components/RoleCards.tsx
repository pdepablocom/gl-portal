import Image from "next/image";

const roles = [
  {
    title: "Start as a Builder",
    description:
      "Deploy intelligent contracts and contribute repos to earn builder points. ",
    buttonText: "Start building ",
    badge: "/assets/builder-badge.svg",
    bgIllustration: "/assets/group-7.svg",
    glowSvg: "/assets/ellipse-15.svg",
  },
  {
    title: "Become a validator",
    description:
      "Deploy intelligent contracts and contribute repos to earn builder points. ",
    buttonText: "Join the waitlist",
    badge: "/assets/validator-badge.svg",
    bgIllustration: "/assets/group-9.svg",
    glowSvg: "/assets/ellipse-16.svg",
  },
  {
    title: "Join the community",
    description:
      "Deploy intelligent contracts and contribute repos to earn builder points. ",
    buttonText: "Become a reporter",
    badge: "/assets/community-badge.svg",
    bgIllustration: "/assets/polygon-7.svg",
    glowSvg: "/assets/ellipse-17.svg",
  },
];

export default function RoleCards() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 rounded-lg p-5">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 text-center text-gray-950">
        <h2 className="text-h1">
          Choose how you contribute
        </h2>
        <p className="text-body-lg">
          Pick your path — you can always take on more roles later.
        </p>
      </div>

      {/* Cards */}
      <div className="flex w-full items-center gap-3">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex flex-1 flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-2"
          >
            {/* Card illustration */}
            <div className="relative flex h-[240px] w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-gray-100">
              <Image
                src={role.bgIllustration}
                alt=""
                width={360}
                height={180}
                className="absolute left-0 top-[31px] h-[180px] w-auto"
              />
              <Image
                src={role.badge}
                alt={role.title}
                width={80}
                height={80}
                className="relative z-10"
              />
            </div>

            {/* Card content */}
            <div className="flex w-full flex-col items-start justify-center gap-6 p-4">
              <div className="flex w-full flex-col items-start gap-3 text-gray-950">
                <h3 className="text-h3">
                  {role.title}
                </h3>
                <p className="w-full text-body-regular">
                  {role.description}
                </p>
              </div>
              <button className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-gray-900">
                <span className="text-sm font-medium tracking-[0.28px] text-white">
                  {role.buttonText}
                </span>
                <Image
                  src="/assets/arrow-right-line.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
