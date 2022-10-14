import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { PostCard } from "./post-card";

export function RecentPosts() {
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: "space-between"}}
          alignContent="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref href="/blog">
            <MuiLink sx={{ display: { xs: "none", md: "inline" } }}>
              View All
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>

          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
