import Image from "next/image";

const checkItems = [
  "Repos verified through GitHub OAuth",
  "Validate subjective outcomes in Intelligent Contracts",
  "Points awarded on acceptance",
];

export default function ContributionsSection() {
  return (
    <section className="flex w-full items-center justify-center gap-6 rounded-lg p-5">
      {/* Illustration card */}
      <div className="relative flex h-[400px] flex-1 flex-col items-start justify-center overflow-hidden rounded-lg border border-gray-100">
        {/* Code card */}
        <div className="absolute left-[83px] top-[58px] flex h-[223px] w-[221px] flex-col gap-[19px] rounded-lg border border-gray-100 bg-white p-[19px] shadow-card">
          <p className="w-full text-[17px] font-medium tracking-[0.34px] text-gray-950">
            studio.genlayer.com
          </p>
          <div className="w-[182px] font-mono text-[14px] leading-[22px] text-gray-950">
            <p>
              <span className="text-purple-code">contract</span>
              <span>{` GLSwap {`}</span>
            </p>
            <p>
              <span>{`   `}</span>
              <span className="text-blue-code">func</span>
              <span>
                {` swap(a, b):`}
                <br />
                {`      validate(a, b)`}
                <br />
                {`      execute_trade()`}
              </span>
            </p>
          </div>
          <div className="flex w-full items-center gap-1">
            <div className="flex flex-1 items-center justify-center rounded-3xl bg-gray-125 px-2.5 py-1">
              <span className="text-[17px] font-medium text-gray-350">
                Solidity
              </span>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-3xl bg-success-bg px-2.5 py-1">
              <span className="text-[17px] font-medium text-success-verified">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Vector connector */}
        <Image
          src="/assets/vector-7.svg"
          alt=""
          width={239}
          height={128}
          className="absolute left-[171px] top-[108px]"
        />

        {/* Accepted card */}
        <div className="absolute left-[333px] top-[220px] flex h-[121px] w-[140px] flex-col items-start justify-center gap-[19px] rounded-lg border border-gray-100 bg-white p-[19px] shadow-card">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/assets/circle-fill.svg"
              alt=""
              width={10}
              height={10}
            />
            <span className="text-[17px] font-medium tracking-[0.34px] text-success-verified">
              Accepted
            </span>
          </div>
          <p className="text-[29px] font-medium leading-[38px] tracking-[-1.44px] text-gray-950">
            +200 GP
          </p>
        </div>

        {/* Submissions card */}
        <div className="absolute left-[333px] top-[58px] flex h-[121px] w-[140px] flex-col items-start justify-center gap-[19px] rounded-lg border border-gray-100 bg-white p-[19px] shadow-card">
          <div className="flex items-center justify-center">
            <span className="text-[17px] font-medium tracking-[0.34px] text-gray-350">
              Submissions
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 font-medium">
            <span className="text-[29px] leading-[38px] tracking-[-0.86px] text-link">
              3
            </span>
            <span className="text-[17px] tracking-[0.34px] text-gray-950">
              Accepted
            </span>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col items-start justify-center gap-6">
        <h2 className="w-[542px] text-h2 text-gray-950">
          Submit contributions{" "}
        </h2>
        <p className="w-full text-body-lg text-gray-950">
          Every contribution is reviewed by stewards. Accepted work earns
          GenLayer Points. Quality matters, the 18.5% acceptance rate means your
          work stands out.
        </p>
        <div className="flex w-full flex-col items-start gap-1">
          {checkItems.map((item) => (
            <div key={item} className="flex w-full items-center gap-2.5">
              <Image
                src="/assets/checkbox-circle-fill.svg"
                alt="Check"
                width={16}
                height={16}
              />
              <span className="flex-1 text-body-lg text-gray-950">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
