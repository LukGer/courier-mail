"use client";

import { EmailLabel } from "@/types";
import { Link, LinkProps } from "@tanstack/react-router";
import {
  AlertCircleIcon,
  ClockIcon,
  DiamondIcon,
  Edit3Icon,
  EditIcon,
  InboxIcon,
  LogInIcon,
  MailCheckIcon,
  PlaneTakeoffIcon,
  StarIcon,
} from "lucide-react";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export default function AppSidebar({ labels }: { labels: EmailLabel[] }) {
  const items: {
    title: string;
    url: LinkProps["to"];
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[] = [
    {
      title: "Inbox",
      url: "/mail/inbox",
      icon: InboxIcon,
    },
    {
      title: "Starred",
      url: "/mail/starred",
      icon: StarIcon,
    },
    {
      title: "Snoozed",
      url: "/mail/snoozed",
      icon: ClockIcon,
    },
    {
      title: "Important",
      url: "/mail/important",
      icon: DiamondIcon,
    },
    {
      title: "Sent",
      url: "/mail/sent",
      icon: PlaneTakeoffIcon,
    },
    {
      title: "Drafts",
      url: "/mail/drafts",
      icon: EditIcon,
    },
    {
      title: "Spam",
      url: "/mail/spam",
      icon: AlertCircleIcon,
    },
    {
      title: "Login",
      url: "/signin",
      icon: LogInIcon,
    },
  ];

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="bg-gray-100 rounded-md p-2 pointer-events-none"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <MailCheckIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Courier Mail</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size="lg"
                  className="bg-primary text-primary-foreground"
                  asChild
                >
                  <a href="/compose">
                    <Edit3Icon className="ml-2 mr-2 size-4 min-h-4 shrink-0" />
                    <span className="overflow-hidden font-semibold">
                      Compose
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span className="font-bold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Labels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {labels.map((label) => (
                <SidebarMenuItem key={label.id}>
                  <SidebarMenuButton asChild>
                    <Link
                      to="."
                      search={{
                        label: label.id,
                      }}
                    >
                      <div
                        className="mr-2 size-3 shrink-0 rounded-full"
                        style={{ backgroundColor: label.color }}
                      ></div>
                      <span className="font-bold">{label.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
