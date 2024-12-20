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
    <NextUINavbar
      shouldHideOnScroll
      classNames={{ menu: "overflow-hidden" }}
      maxWidth="xl"
      position="static"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent justify="start">
        <ul className="hidden justify-start gap-4 md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:font-medium data-[active=true]:text-primary",
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
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
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

      <NavbarMenu>
        <div className="flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "px-2.5 py-1.5",
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
