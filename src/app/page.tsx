import { AppSidebar } from "@/components/app-sidebar";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoBanner from "@/components/logo-banner";
import ModelCatalogue from "@/components/model-catalogue";
import PlayGroundSection from "@/components/playground-section";
import QuickStart from "@/components/quick-start";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Getting Started</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="container mx-auto overflow-x-hidden px-4">
          <Hero />
          <LogoBanner />
          <QuickStart />
          <Features />
          <ModelCatalogue />
          <PlayGroundSection />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
