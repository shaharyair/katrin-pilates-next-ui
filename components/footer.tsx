import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { siteConfig } from "../config/site";

import { Container } from "./container";
import { SocialLinks } from "./social";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="w-full">
      <Container className="flex w-full flex-col gap-6 !pb-6 !pt-0">
        <Divider />
        <div className="flex w-full items-center justify-between">
          <SocialLinks />
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex w-full items-start justify-center gap-4">
            {siteConfig.legalNavItems.map((item, index) => (
              <Link
                key={`legal_nav_link_${index}`}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              הסטודיו של קאתרין. כל הזכויות שמורות {new Date().getFullYear()} ©
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
