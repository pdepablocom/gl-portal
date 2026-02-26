export default function FaucetInfoBadges() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Info Pills */}
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-[#6b6b6b] ring-1 ring-black/[0.06]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Once per 24h
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs text-[#6b6b6b] ring-1 ring-black/[0.06]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          100 GEN per claim
        </span>
      </div>

      {/* Add Network Button */}
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-4 py-2 text-[13px] font-medium text-[#131214] transition-all hover:border-[#9e4bf6]/30 hover:text-[#9e4bf6]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add GenLayer Testnet to Wallet
      </button>
    </div>
  );
}
