type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`bg-[#2D5BFF] ROUNDED-[8px] px-[32px] py-[12px] text-white ${className}`}
    >
      {children}
    </button>
  );
}
