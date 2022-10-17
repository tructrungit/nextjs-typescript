import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Icon, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface HeaderProps {}

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: "https://google.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Twitter, url: "https://twitter.com" },
    { icon: LinkedIn, url: "https://www.linkedin.com" },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box
            component="a"
            key={idx}
            p={2}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }}></Icon>
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright @{new Date().getFullYear()} All rights resvered
      </Typography>
    </Box>
  );
}
