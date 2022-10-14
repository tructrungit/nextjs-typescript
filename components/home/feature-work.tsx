import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Work } from "../../models";
import { WorkList } from "../works";

export function FeatureWork() {
  //  Call API
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboard",
      createdAt: "1665717927423",
      updatedAt: "1665717927423",
      tagList: ["Design", "Pattern"],
      shortDescription:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.",
      fullDescription: "",
      imageUrl:
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1665717927423",
      updatedAt: "1665717927423",
      tagList: ["Figma", "Icon Desgin"],
      shortDescription:
        "Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      fullDescription: "",
      imageUrl:
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1665717927423",
      updatedAt: "1665717927423",
      tagList: ["Figma", "Icon Desgin"],
      shortDescription:
        "Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      fullDescription: "",
      imageUrl:
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>Feater Works</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
