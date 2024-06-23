"use client"
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const footerItems = [
  {
    routes: "Home",
    pathname: "/",
  },
  {
    routes: "Pages",
    pathname: "/pages",
  },
  {
    routes: "Category",
    pathname: "/category",
  },
  {
    routes: "News",
    pathname: "/news",
  },
  {
    routes: "Post",
    pathname: "/post",
  },
  {
    routes: "Contact",
    pathname: "/contact",
  },
];
const Footer = () => {
  return (
    <Box className="bg-black mb-0">
      <Container>
        <Box className="flex justify-center items-center mx-auto py-5">
          <Stack direction="row">
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <XIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <SubscriptionsIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>

          <Box  className="w-full text-center  "
          >
            {footerItems.map((item) => (
              <Link key={item} href={item.pathname}>
                 <Button className="text-white">
                   {item.routes}
                 </Button>
              </Link>
            ))}
          </Box>
          <Typography className="text-center py-4 text-slate-500 text-lg font-extrabold">
            ©2024 All rights reserved by The Falcon News
          </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
