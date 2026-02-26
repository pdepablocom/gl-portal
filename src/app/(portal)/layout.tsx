import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      <main className="ml-[222px] mt-16 flex flex-col items-center gap-6 overflow-hidden px-3">
        {children}
      </main>
    </div>
  );
}
