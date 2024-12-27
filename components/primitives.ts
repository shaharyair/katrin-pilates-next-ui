import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    size: {
      xs: "text-2xl md:text-3xl",
      sm: "text-3xl md:text-4xl",
      md: "text-[2.3rem] md:text-5xl leading-9",
      lg: "text-4xl md:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const subtitle = tv({
  base: "text-xl md:text-2xl",
});
