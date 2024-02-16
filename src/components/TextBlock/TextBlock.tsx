export type TextBlockProps = {
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextBlock({ label, className, ...rest }: TextBlockProps) {
  return (
    <div className="relative">
      {label && (
        <label className="absolute pt-3 pl-5 pr-5 text-4xl font-extrabold">
          {label}
        </label>
      )}
      <textarea
        cols={30}
        rows={7}
        className={`resize-none bg-dark text-gray-primary text-md leading-6 rounded-md disabled:bg-disabled disabled:text-disabled disabled:border-2 disabled:border-disabled pl-5 pr-5 ${
          label ? "pt-4xl" : "pt-5"
        } ${className}`}
        {...rest}
      />
    </div>
  );
}
