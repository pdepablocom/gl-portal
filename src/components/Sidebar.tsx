"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: "/assets/dashboard-fill.svg", label: "Overview", href: "/" },
  { icon: "/assets/connector-line.svg", label: "Testnet Bradbury", href: "/testnet" },
  { icon: "/assets/bar-chart-fill.svg", label: "Metrics", href: "/metrics" },
];

const contributeItems = [
  {
    icon: "/assets/code-s-slash-line.svg",
    label: "Builders",
    href: "/builders",
    badge: "Pending",
    badgeBg: "bg-role-builder-bg",
    badgeText: "text-role-builder",
  },
  {
    icon: "/assets/folder-shield-2-line.svg",
    label: "Validators",
    href: "/validators",
    badge: "Pending",
    badgeBg: "bg-role-validator-bg",
    badgeText: "text-role-validator",
  },
  {
    icon: "/assets/group-3-line.svg",
    label: "Community",
    href: "/community",
    badge: "Pending",
    badgeBg: "bg-role-community-bg",
    badgeText: "text-role-community",
  },
  {
    icon: "/assets/seedling-line.svg",
    label: "Stewards",
    href: "/stewards",
    badge: "Pending",
    badgeBg: "bg-role-steward-bg",
    badgeText: "text-role-steward",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 z-40 flex w-[222px] flex-col justify-between border-b border-r border-gray-200 bg-white p-3">
      <div className="flex flex-col gap-6">
        {/* Main nav */}
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive ? "bg-gray-100" : "hover:bg-gray-75"
                }`}
              >
                <Image src={item.icon} alt={item.label} width={16} height={16} />
                <span className={`text-sm font-medium tracking-[0.28px] ${
                  isActive ? "text-gray-950" : "text-gray-600"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Contribute section */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-normal tracking-[0.24px] text-gray-500">
            Contribute
          </span>
          <div className="flex flex-col gap-1">
            {contributeItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative flex items-center gap-2 rounded-lg px-3 py-2 ${
                    isActive ? "bg-gray-100" : "hover:bg-gray-75"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                  />
                  <span className={`text-sm font-medium tracking-[0.28px] ${
                    isActive ? "text-gray-950" : "text-gray-600"
                  }`}>
                    {item.label}
                  </span>
                  <div
                    className={`absolute left-[129px] top-1.5 ${item.badgeBg} rounded-xl px-2 py-1.5`}
                  >
                    <span
                      className={`text-xs font-medium tracking-[0.24px] ${item.badgeText}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-1">
        <Link
          href="/submit"
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-75"
        >
          <Image
            src="/assets/add-line-1.svg"
            alt="Submit"
            width={16}
            height={16}
          />
          <span className="text-sm font-medium tracking-[0.28px] text-gray-600">
            Submit Contribution
          </span>
        </Link>

        <Link href="/profile" className="rounded-lg bg-gray-100">
          <div className="flex items-center justify-between rounded-lg py-2 pl-2 pr-3">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/ellipse-18.png"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium tracking-[0.28px] text-gray-950">
                wingston
              </span>
            </div>
            <Image
              src="/assets/arrow-right-s-line.svg"
              alt="Expand"
              width={16}
              height={16}
            />
          </div>
        </Link>
      </div>
    </aside>
  );
}
