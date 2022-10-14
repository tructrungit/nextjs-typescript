import { Work } from "@/models";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { format } from "date-fns";

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ sx: "column", sm: "row" }} spacing={2}>
      <Box width={{ sx: "100%", sm: "246px" }} flexShrink={0}>
        <Image
          src={work.imageUrl}
          width={246}
          height={180}
          layout="responsive"
          alt="work thumbnail"
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Chip
            color="secondary"
            label={format(Number(work.createdAt), "yyyy")}
            size="small"
          ></Chip>
          
          <Typography ml={3} color="GrayText">
            {work.tagList.join(", ")}
          </Typography>
        </Stack>

        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
