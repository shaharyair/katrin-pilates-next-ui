import { Link } from "@nextui-org/link";

import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./icons";

import { siteConfig } from "@/config/site";
import { IconSvgProps } from "@/types";

export const SocialLinks: React.FC<IconSvgProps> = (props) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <WhatsappLink {...props} />
      <FacebookLink {...props} />
      <InstagramLink {...props} />
    </div>
  );
};

export const WhatsappLink: React.FC<IconSvgProps> = (props) => {
  return (
    <Link color="foreground" href={siteConfig.links.whatsappChat}>
      <WhatsappIcon {...props} />
    </Link>
  );
};

export const FacebookLink: React.FC<IconSvgProps> = (props) => {
  return (
    <Link color="foreground" href={siteConfig.links.facebook}>
      <FacebookIcon {...props} />
    </Link>
  );
};

export const InstagramLink: React.FC<IconSvgProps> = (props) => {
  return (
    <Link color="foreground" href={siteConfig.links.instagram}>
      <InstagramIcon {...props} />
    </Link>
  );
};
