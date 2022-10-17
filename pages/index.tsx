import { Seo } from "@/components/common";
import { FeatureWork } from "@/components/home/feature-work";
import { Box } from "@mui/system";
import { HeroSection } from "../components/home/hero";
import { RecentPosts } from "../components/home/recent-posts";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo data={{
        title: 'Nexjs',
        description: 'description',
        url: 'https://nextjs.org/',
        thumbnailUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      }}/>
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
