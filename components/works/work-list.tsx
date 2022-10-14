import { Work } from "@/models";
import * as React from "react";
import { Box, Typography, Divider } from "@mui/material";

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <React.Fragment key={work.id}>
          <Box>{work.title}</Box>
          <Divider sx={{ my: 3 }} />
        </React.Fragment>
      ))}
    </Box>
  );
}
