import Image from "next/image";

const checkItems = [
  "Explore the Studio and docs",
  "Learn intelligent contract fundaments",
  "Deploy, contribute, and become a GenLayer Builder ",
];

export default function JourneySection() {
  return (
    <section className="flex w-full items-center justify-center gap-6 rounded-lg p-5">
      <div className="flex flex-1 flex-col items-start justify-center gap-6">
        <h2 className="w-[542px] text-h2 text-gray-950">
          Select your journey
        </h2>
        <p className="w-full text-body-lg text-gray-950">
          Learn GenLayer&apos;s basics and deploy your first Intelligent
          Contract powered by Optimistic Democracy
        </p>
        <div className="flex flex-col items-start gap-1">
          {checkItems.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2.5">
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

      {/* Illustration card */}
      <div className="relative flex h-[400px] flex-1 flex-col items-start justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
        <Image
          src="/assets/group-6.svg"
          alt="Journey illustration"
          width={563}
          height={448}
          className="absolute left-0 top-0"
        />
      </div>
    </section>
  );
}
