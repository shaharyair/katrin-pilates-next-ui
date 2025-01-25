import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

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
            <Link color="foreground" href="/מדיניות-פרטיות">
              מדיניות פרטיות
            </Link>
            <Link color="foreground" href="/תנאי-שימוש">
              תנאי שימוש
            </Link>
            <Link color="foreground" href="/תקנון-אתר">
              תקנון אתר
            </Link>
          </div>
          <div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              הסטודיו של קאתרין. כל הזכויות שמורות 2024 ©
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
