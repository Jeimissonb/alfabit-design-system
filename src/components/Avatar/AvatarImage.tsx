export type AvatarImageProps = {
  src: string;
  altDescription: string | "";
};

export function AvatarImage({ src, altDescription }: AvatarImageProps) {
  return (
    <div>
      <img
        src={src}
        alt={altDescription}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
}
