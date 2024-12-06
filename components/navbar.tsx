import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent justify="start">
        <ul className="hidden md:flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            {/* <p className="font-bold text-inherit">Katrin Studio</p> */}
            <Image
              alt=""
              className="dark:invert"
              height={38}
              objectFit="contain"
              src="/logo.svg"
              width={80}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className="overflow-hidden">
        <div className="flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "py-1.5 px-2.5",
                )}
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
