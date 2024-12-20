import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export const Hero = () => {
  return (
    <section className="relative flex h-[calc(100vh_-_4rem)] w-full flex-col items-center justify-center">
      <Image
        alt="/asd"
        className="size-full object-cover brightness-50"
        height={1080}
        src="/hero/example.jpg"
        width={1920}
      />

      <div className="container absolute left-1/2 top-1/2 flex h-1/4 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between text-center">
        <h1 className="text-xl font-bold text-white md:text-3xl">
          {siteConfig.hero.title}
        </h1>
        <p className="text-xl text-white md:text-3xl">
          {siteConfig.hero.subtitle}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button as={Link} color="primary" href={"#"}>
            {siteConfig.hero.primaryAction}
          </Button>
          <Button as={Link} color="secondary" href={"#"}>
            {siteConfig.hero.secondaryAction}
          </Button>
        </div>
      </div>
    </section>
  );
};
