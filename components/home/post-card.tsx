import * as React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { Post } from "../../models";
import { format } from 'date-fns'

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  //   console.log(post);
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Typography component={'span'} variant="body1" my={2} sx={{ display: "flex" }}>
          {format(Number(post.publishedDate), 'dd MMM yyyy')}

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          
          {post.tagList.join(", ")}
        </Typography>

        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
