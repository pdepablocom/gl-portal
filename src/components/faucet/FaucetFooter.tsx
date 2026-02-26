export default function FaucetFooter() {
  const links = [
    { label: "Website", href: "https://genlayer.com" },
    { label: "Docs", href: "https://docs.genlayer.com" },
    { label: "Explorer", href: "https://explorer.genlayer.com" },
    { label: "GitHub", href: "https://github.com/genlayer" },
  ];

  return (
    <footer className="border-t border-black/[0.04] bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        <span className="text-xs text-[#ababab]">GenLayer Foundation</span>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6b6b6b] transition-colors hover:text-[#131214]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
