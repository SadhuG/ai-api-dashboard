"use client";

import {
  AudioWaveform,
  BookOpen,
  ChartColumn,
  CircleHelp,
  Command,
  GalleryVerticalEnd,
  Home,
  KeyRound,
  LayoutGrid,
  Sparkles,
  Star,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LogoDisplay } from "./logo-display";

import Logo from "@/assets/kidjig-logo.png";

// This is sample data.
const data = {
  user: {
    name: "Guest",
    email: "Not signed in",
    avatar: undefined,
  },
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      icon: Home,
      current: true,
    },
    {
      title: "Models",
      url: "#",
      icon: LayoutGrid,
      current: false,
    },
    {
      title: "Agent",
      url: "#",
      icon: Sparkles,
      current: false,
    },
    {
      title: "API Keys",
      url: "#",
      icon: KeyRound,
      current: false,
    },
    {
      title: "Playground",
      url: "#",
      icon: Star,
      current: false,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartColumn,
      current: false,
    },
    {
      title: "Docs",
      url: "#",
      icon: BookOpen,
      current: false,
    },
    {
      title: "Support",
      url: "#",
      icon: CircleHelp,
      current: false,
    },
    {
      title: "Pricing",
      url: "#",
      icon: Sparkles,
      current: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoDisplay logo={Logo} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
