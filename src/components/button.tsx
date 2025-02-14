import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "blog" | "garden";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "blog",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variantStyles = {
    blog: "bg-yellow-300 hover:bg-yellow-400",
    garden: "bg-green-300 hover:bg-green-400",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "cartoon-button transform rounded-lg px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
