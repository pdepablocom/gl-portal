import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex w-full items-center justify-center rounded-lg px-5 py-32">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="w-[542px] text-center text-display-xl text-gray-950">
          Welcome to GenLayer Points
        </h1>
        <p className="text-center text-body-lg text-gray-950">
          Join professional validators and builders in testing the trust
          infrastructure for the AI age.
        </p>
        <div className="flex items-start gap-2">
          <button className="flex h-10 items-center justify-center gap-2 rounded-full bg-gray-900 px-4">
            <span className="text-sm font-medium tracking-[0.28px] text-white">
              Start building{" "}
            </span>
            <Image
              src="/assets/arrow-right-line.svg"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
          <button className="flex h-10 items-center justify-center rounded-full bg-gray-100 px-4">
            <span className="text-sm font-medium tracking-[0.28px] text-gray-900">
              Contact
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
