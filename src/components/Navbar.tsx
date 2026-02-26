import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-250 bg-white px-3 py-3">
      <div className="flex items-center gap-1 px-1">
        <Image
          src="/assets/gl-logo-black.svg"
          alt="GenLayer Logo"
          width={134}
          height={32}
          className="h-8 w-auto"
        />
        <span className="text-nav-logo text-gray-950">
          Points
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4">
          <Image
            src="/assets/search-line.svg"
            alt="Search"
            width={16}
            height={16}
          />
          <span className="text-sm font-medium tracking-[0.28px] text-gray-400">
            Search Participants...
          </span>
        </div>

        {/* Submit contribution button */}
        <div className="flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end px-4">
          <span className="text-sm font-medium tracking-[0.28px] text-white">
            Submit a contribution
          </span>
          <Image
            src="/assets/add-line.svg"
            alt="Add"
            width={16}
            height={16}
          />
        </div>

        {/* Avatar */}
        <Image
          src="/assets/ellipse-14.png"
          alt="User avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
