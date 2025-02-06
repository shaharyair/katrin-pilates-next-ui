import Script, { ScriptProps } from "next/script";

export default function UserwayWidget(props: ScriptProps) {
  return (
    <>
      <Script
        data-account="F8QPIXUc7P"
        src="https://cdn.userway.org/widget.js"
        {...props}
      />
    </>
  );
}
