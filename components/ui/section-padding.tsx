import type { ReactNode } from "react";

type PaddingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionPaddingY72({ children, className = "" }: PaddingProps) {
  return <div className={`pt-[72px] pb-[72px] ${className}`}>{children}</div>;
}

export function SectionPaddingX120R72({ children, className = "" }: PaddingProps) {
  return (
    <div
      className={`px-4 sm:px-8 md:px-12 xl:pl-[120px] xl:pr-[72px] ${className}`}
    >
      {children}
    </div>
  );
}
