"use client";

export default function FaucetForm() {
  return (
    <div className="card-elevated w-full max-w-md rounded-2xl bg-white p-6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {/* Wallet Address */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="wallet-address"
            className="text-[13px] font-medium text-[#131214]"
          >
            Wallet Address
          </label>
          <input
            id="wallet-address"
            type="text"
            placeholder="0x..."
            className="input-faucet h-[44px] rounded-xl border border-black/[0.08] bg-white px-3.5 font-mono text-sm text-[#131214] placeholder:text-[#bdbdbd] transition-colors"
          />
        </div>

        {/* Captcha Placeholder */}
        <div className="flex h-[65px] w-[300px] items-center justify-center self-center rounded-lg border border-black/[0.06] bg-[#f5f5f5]">
          <span className="text-xs text-[#ababab]">Captcha verification</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ borderRadius: "9999px" }}
          className="btn-glow h-[44px] w-full cursor-pointer bg-gradient-to-b from-[#9e4bf6] to-[#8a3ae0] text-sm font-medium text-white transition-all"
        >
          Claim 100 GEN
        </button>
      </form>
    </div>
  );
}
