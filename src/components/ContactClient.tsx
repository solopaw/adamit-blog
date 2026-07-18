'use client';

import { useTheme } from "next-themes";
import InstagramIcon from "./instagram";
import SnapchatIcon from "./snapchat";
import { TiktokIcon } from "./tiktok";
import YoutubeIcon from "./youtube";
import Link from 'next/link';
import { Button } from "./ui/button";
import { useState } from "react";

export default function ContactClient() {
  const { theme, setTheme } = useTheme();
  // Initialize with a fallback, or handle matching the initial system/theme color
  const [color, setColor] = useState("#fff");

  const handleThemeToggle = () => {
    // 1. Calculate the NEXT theme state explicitly
    const nextTheme = theme === "dark" ? "light" : "dark";
    
    // 2. Update the next-themes state
    setTheme(nextTheme);

    // 3. Update the icon color state based on the NEXT theme value
    switch (nextTheme) {
      case "dark":
        setColor("#fff");
        break; // Added break to prevent falling through
      case "light":
        setColor("#000");
        break; // Added break for safety
      default:
        setColor("#fff");
    }
  };

  return (
    <div className="text-foreground flex items-center gap-4">
      <Button onClick={handleThemeToggle}>
        Toggle Theme
      </Button>
      
      <Link href="https://www.snapchat.com/@adamjoelfraser">
        <SnapchatIcon size="100px" color={color}/>
      </Link>
      <Link href="https://www.instagram.com/adamjoelfraser">
        <InstagramIcon color={color} size="100px"/>
      </Link>
      <Link href="https://www.tiktok.com/@adamjoelfraser">
        <TiktokIcon size="100px" color={color}/>
      </Link>
      <Link href="https://www.youtube.com/@adamjoelfraser">
        <YoutubeIcon size="100px" color={color} />
      </Link>
    </div>
  );
}