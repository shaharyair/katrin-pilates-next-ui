import clsx from "clsx";

import { subtitle, title } from "./primitives";

export enum SectionWrapperSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

type classNames = "root" | "title" | "subtitle" | "childrenWrapper";
interface SectionWrapper {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  classNames: Partial<Record<classNames, string>>;
  size: SectionWrapperSize;
}

export const SectionWrapper = (props: Partial<SectionWrapper>) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-center text-center",
        props.classNames?.root,
      )}
    >
      {props.title && (
        <h1
          className={clsx(
            title({ size: props.size || "xs" }),
            props.classNames?.title,
          )}
        >
          {props.title}
        </h1>
      )}
      {props.subtitle && (
        <p className={clsx(subtitle(), "mt-1", props.classNames?.subtitle)}>
          {props.subtitle}
        </p>
      )}
      <div className={clsx("mt-8 w-full", props.classNames?.childrenWrapper)}>
        {props.children}
      </div>
    </div>
  );
};
