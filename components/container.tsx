import clsx from "clsx";

interface ContainerProps {
  className: string;
  children: React.ReactNode;
}

export const Container = (props: Partial<ContainerProps>) => {
  return (
    <div className={clsx("container py-12", props.className)}>
      {props.children}
    </div>
  );
};
