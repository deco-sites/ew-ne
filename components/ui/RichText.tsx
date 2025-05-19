import type { JSX } from "preact";

export default function RichText({
  content,
  ...props
}:
  & Omit<
    JSX.HTMLAttributes<HTMLDivElement>,
    "children" | "dangerouslySetInnerHTML"
  >
  & { content: string }) {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{
        __html: content.replace(/<p><\/p>/g, "<br>") ||
          "",
      }}
    />
  );
}