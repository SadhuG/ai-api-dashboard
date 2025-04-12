"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image, { StaticImageData } from "next/image";

interface LogoDisplayProps {
  logo: StaticImageData;
}

export function LogoDisplay({ logo }: LogoDisplayProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center">
            <Image src={logo} alt="Kidjig logo" width={28} height={28} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span>Kidjig</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
