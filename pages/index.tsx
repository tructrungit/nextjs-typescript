import { Box } from "@mui/system";
import { HeroSection } from "../components/home/hero";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
