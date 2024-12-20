import clsx from "clsx";

import { subtitle, title } from "./primitives";

interface SectionWrapper {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className: string;
}

export const SectionWrapper = (props: Partial<SectionWrapper>) => {
  return (
    <div
      className={clsx(
        "container flex flex-col items-center justify-center gap-6 text-center md:gap-10",
        props.className,
      )}
    >
      {props.title && <h1 className={clsx(title())}>{props.title}</h1>}
      {props.subtitle && <p className={subtitle()}>{props.subtitle}</p>}
      {props.children}
    </div>
  );
};
