import { Stack, Container } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { LayoutProps } from "../../models/index";
import Footer from "../common/footer";
import Header from "../common/header";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/works">
        <a>Works</a>
      </Link>

      <Box flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: "primary.main" }}>
          SM CONTAINER
        </Container>
        <Container sx={{ bgcolor: "primary.main" }}>
          MD CONTAINER
        </Container>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
