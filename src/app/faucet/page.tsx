import type { Metadata } from "next";
import FaucetHeader from "@/components/faucet/FaucetHeader";
import FaucetFooter from "@/components/faucet/FaucetFooter";
import FaucetHero from "@/components/faucet/FaucetHero";
import FaucetForm from "@/components/faucet/FaucetForm";
import FaucetInfoBadges from "@/components/faucet/FaucetInfoBadges";
import FaucetStats from "@/components/faucet/FaucetStats";
import GradientBackground from "@/components/faucet/GradientBackground";

export const metadata: Metadata = {
  title: "Testnet Faucet — GenLayer",
  description:
    "Get 100 GEN tokens for testing on GenLayer Testnet Asimov. One claim per 24 hours.",
};

export default function FaucetPage() {
  return (
    <div className="faucet-theme flex min-h-screen flex-col" style={{ background: "#fafafa" }}>
      <FaucetHeader />

      <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-16">
        <GradientBackground />

        <div className="relative z-10 flex w-full flex-col items-center gap-6">
          <FaucetHero />
          <FaucetForm />
          <FaucetInfoBadges />
          <FaucetStats />
        </div>
      </main>

      <FaucetFooter />
    </div>
  );
}
