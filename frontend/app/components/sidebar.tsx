import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Activity,
  Lifebuoy,
  Maximize2,
  MedalStar,
  MessageEdit,
  MessageQuestion,
  MobileProgramming,
} from "iconsax-react";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "OOP",
      items: [
        {
          title: "Apa itu OOP",
          href: "/apa-itu-oop",
          icon: (
            <MessageQuestion
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Konsep utama dalam OOP",
          href: "/konsep-utama-oop",
          icon: (
            <Lifebuoy
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Contoh penggunaan OOP",
          href: "/contoh-penggunaan-oop",
          icon: (
            <MessageEdit
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
      ],
    },
    {
      title: "Dependent Dropdown",
      items: [
        {
          title: "Apa itu dependent dropdown",
          href: "/apa-itu-dependent-dropdown",
          icon: (
            <MessageQuestion
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Bagaimana implementasinya",
          href: "/bagaimana-implementasinya",
          icon: (
            <Maximize2
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Contoh penggunaan",
          href: "/contoh-penggunaan",
          icon: (
            <MessageEdit
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
      ],
    },
    {
      title: "Optimasi Query & Grafik",
      items: [
        {
          title: "Mengoptimalkan query SQL",
          href: "/mengoptimalkan-query-sql",
          icon: (
            <Activity
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Indeks dalam basis data",
          href: "/indeks-dalam-basis-data",
          icon: (
            <MedalStar
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Contoh grafik interaktif",
          href: "/contoh-grafik-interaktif",
          icon: (
            <MobileProgramming
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
      ],
    },
    {
      title: "Unit Testing",
      items: [
        {
          title: "Apa itu unit testing",
          href: "/apa-itu-unit-testing",
          icon: (
            <MessageQuestion
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Mengapa unit test penting",
          href: "/mengapa-unit-test-penting",
          icon: (
            <MessageQuestion
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
        {
          title: "Contoh unit testing",
          href: "/contoh-unit-testing",
          icon: (
            <MobileProgramming
              size="24"
              color="#1f2937"
              variant="Linear"
              className="mr-2"
            />
          ),
        },
      ],
    },
  ];

  return (
    <div className={cn("pb-12 border-r-2 border-gray-300", className)}>
      <div className="space-y-4 py-4">
        {menuItems.map((item) => (
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {item.title}
            </h2>
            <div className="space-y-1">
              {item.items.map((subItem) => (
                <Link href={subItem.href}>
                  <Button
                    variant={pathname == subItem.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {subItem.icon}
                    {subItem.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
