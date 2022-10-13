import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return <Box>Home page</Box>;
};

Home.Layout = MainLayout

export default Home;
