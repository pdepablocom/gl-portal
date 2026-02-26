import Image from "next/image";
import MonthlyPodium from "./MonthlyPodium";

const checkItems = [
  "35,220 GP already distributed",
  "Live leaderboard across all roles",
  "Badges and roles unlock as you progress",
];

export default function RanksSection() {
  return (
    <section className="flex w-full items-center justify-center gap-6 rounded-lg p-5">
      {/* Text content */}
      <div className="flex flex-1 flex-col items-start justify-center gap-6">
        <h2 className="w-[542px] text-h2 text-gray-950">
          Climb the ranks
        </h2>
        <p className="w-full text-body-lg text-gray-950">
          Earn points with every accepted contribution and rise through the
          leaderboard. Top contributors get recognized and earn exclusive
          rewards.
        </p>
        <div className="flex flex-col items-start gap-1">
          {checkItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2.5"
            >
              <Image
                src="/assets/checkbox-circle-fill.svg"
                alt="Check"
                width={16}
                height={16}
              />
              <span className="text-body-lg text-gray-950">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly podium */}
      <div className="flex flex-1">
        <MonthlyPodium />
      </div>
    </section>
  );
}
