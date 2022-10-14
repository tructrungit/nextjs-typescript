import { FeatureWork } from "@/components/home/feature-work";
import { Box } from "@mui/system";
import { HeroSection } from "../components/home/hero";
import { RecentPosts } from "../components/home/recent-posts";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
