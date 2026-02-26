export default function FaucetStats() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3">
      {[
        { label: "Total Claims", width: "w-16" },
        { label: "Unique Wallets", width: "w-20" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-black/[0.04] bg-white p-4"
        >
          <p className="text-[11px] font-medium text-[#ababab]">
            {stat.label}
          </p>
          <div
            className={`skeleton-shimmer mt-2 h-5 ${stat.width} rounded`}
          />
        </div>
      ))}
    </div>
  );
}
