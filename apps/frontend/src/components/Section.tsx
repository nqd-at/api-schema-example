import { PropsWithChildren } from "react";

export const Section = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <section className={`p-8 bg-white shadow-lg rounded border-slate-200 ${className || ""}"`}>{children}</section>;
};
