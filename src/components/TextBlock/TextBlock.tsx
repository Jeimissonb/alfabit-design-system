import classNames from "classnames";
import { Box } from "../Box/Box";
import { Typography } from "../Typography/Typography";

export type TextBlockProps = {
  title?: string;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function TextBlock({
  title,
  type = "dark",
  children,
  className,
  ...rest
}: TextBlockProps) {
  const textClass = classNames({
    "text-primary": type === "primary",
    "text-secondary": type === "secondary",
    "text-black": type === "dark",
  });

  return (
    <Box
      className={`flex flex-col gap-2 p-5 text-bla`}
      type={type}
      rounded
      {...rest}
    >
      <div className={className}>
        <Typography className={`${textClass}`} size="xl">
          <span className="font-extrabold">{title}</span>
        </Typography>
        <Typography className={textClass}>{children}</Typography>
      </div>
    </Box>
  );
}
