"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const navItems = [
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

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image 
          
          src={logo} width={100} height={100}  alt="logo" />
          <Box  className="w-full text-center font-black "
          >
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                 <Button className="text-white">
                   {item.routes}
                 </Button>
              </Link>
            ))}
          </Box>

          <Box>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
