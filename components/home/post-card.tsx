import * as React from "react";
import { Card, CardContent } from "@mui/material";

export interface PostCardProps {}

export function PostCard(props: PostCardProps) {
  return (
    <Card>
      <CardContent>Post title</CardContent>
    </Card>
  );
}
