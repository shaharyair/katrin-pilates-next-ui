import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    gradient: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    color: {
      violet: "text-[#FF1CF7]",
      yellow: "text-[#FF705B]",
      blue: "text-[#5EA2EF]",
      cyan: "text-[#00b7fa]",
      green: "text-[#6FEE8D]",
      pink: "text-[#FF72E1]",
      foreground: "text-[#FFFFFF]",
    },
    size: {
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
    color: "foreground",
  },
  compoundVariants: [
    {
      gradient: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "text-xl md:text-2xl text-gray-200",
});
