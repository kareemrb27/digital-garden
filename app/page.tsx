import { HomeHero } from "@/components/hero/HomeHero";
// import { StatBanner } from "@/components/hero/StatBanner";
import { RecentEntries } from "@/components/content/RecentEntries";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* <StatBanner /> */}
      <RecentEntries />
    </>
  );
}
