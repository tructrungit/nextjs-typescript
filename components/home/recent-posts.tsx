import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { Post } from "../../models";
import { PostCard } from "./post-card";

export function RecentPosts() {
  //  Call API get recent Post
  const postList: Post[] = [
    {
      id: "1",
      title: "Making a design system from scratch",
      publishedDate: "1665717927423",
      tagList: ["Design", "Pattern"],
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.",
    },
    {
      id: "2",
      title: "Create pixel perfect icons in Figma",
      publishedDate: "1665717927423",
      tagList: ["Figma", "Icon Desgin"],
      description:
        "Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
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
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
