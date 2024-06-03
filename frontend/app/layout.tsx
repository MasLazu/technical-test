"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Sidebar } from "./components/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen grid grid-cols-9">
          <div className="col-span-2">
            <Sidebar className="hidden lg:block " />
            <Separator orientation="vertical" />
          </div>
          <main className="col-span-7 p-12 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
