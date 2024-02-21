import classNames from "classnames";
import React from "react";
import { AvatarImage } from "./AvatarImage";
import { AvatarIcon } from "./AvatarIcon";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

export function Avatar({
  size = "xs",
  image,
  description = "",
  className,
  ...rest
}: AvatarProps) {
  const avatarSizeClass = avatarSizeMap[size];

  const AvatarComponent = image ? (
    <AvatarImage src={image} altDescription={description} />
  ) : (
    <AvatarIcon />
  );
  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeClass,
        className
      )}
      {...rest}
    >
      {AvatarComponent}
    </div>
  );
}
