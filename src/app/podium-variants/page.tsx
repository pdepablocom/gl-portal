import PodiumVariants from "@/components/PodiumVariants";

export default function PodiumVariantsPage() {
  return (
    <div className="min-h-screen bg-white px-10 py-12">
      <h1 className="mb-2 font-heading text-[40px] font-medium tracking-[-0.8px] text-black">
        Podium — Color Variants
      </h1>
      <p className="mb-10 font-sans text-[17px] tracking-[0.34px] text-[#6b6b6b]">
        Reference sheet for Figma component variants. Each card shows exact hex
        values.
      </p>
      <PodiumVariants />
    </div>
  );
}
