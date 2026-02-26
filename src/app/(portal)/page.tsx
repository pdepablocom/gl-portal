import AlertBanner from "@/components/dashboard/AlertBanner";
import HeroFeaturedCard from "@/components/dashboard/HeroFeaturedCard";
import StatCards from "@/components/dashboard/StatCards";
import PointsAwardedSection from "@/components/dashboard/PointsAwardedSection";
import TrendingContributors from "@/components/dashboard/TrendingContributors";
import ShowcaseGrid from "@/components/dashboard/ShowcaseGrid";
import ContributionCards from "@/components/dashboard/ContributionCards";
import NewestMembers from "@/components/dashboard/NewestMembers";
import LeaderboardTable from "@/components/dashboard/LeaderboardTable";
import CTASection from "@/components/CTASection";

const universeItems = [
  { title: "GenTalks", author: "cognocracy" },
  { title: "Internet Court", author: "raskovsky" },
  { title: "Rally", author: "GenLayer" },
];

const featuredBuilds = [
  { title: "Argue.fun", author: "cognocracy" },
  { title: "Internet Court", author: "raskovsky" },
  { title: "Rally", author: "GenLayer" },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <AlertBanner variant="warning">
          We&apos;re actively redesigning the portal, things may break.
          Contribution reviews are delayed but all submissions are being
          recorded. Please report bugs and share feedback.
        </AlertBanner>
        <AlertBanner variant="info">
          Contribution reviews are currently delayed. All submissions are being
          recorded and will be reviewed shortly. Thank you for your patience and
          continued participation.
        </AlertBanner>
      </div>

      <HeroFeaturedCard />
      <StatCards />
      <PointsAwardedSection />
      <TrendingContributors />

      <ShowcaseGrid
        title="GenLayer Universe"
        subtitle="This month curated builds"
        items={universeItems}
      />
      <ShowcaseGrid
        title="Featured Builds"
        subtitle="This month curated builds"
        items={featuredBuilds}
      />

      <ContributionCards />
      <NewestMembers />
      <LeaderboardTable />
      <CTASection />
    </>
  );
}
