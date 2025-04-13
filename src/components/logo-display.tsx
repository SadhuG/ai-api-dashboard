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
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground mt-4"
        >
          <div className="flex aspect-square size-8 items-center justify-center">
            <Image src={logo} alt="Kidjig logo" width={28} height={28} />
          </div>
          <div className="grid flex-1 text-left text-base leading-tight font-semibold">
            <span>Kidjig</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
