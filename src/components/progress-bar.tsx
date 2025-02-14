import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  variant?: "blog" | "garden" | "robot";
  className?: string;
}

export function ProgressBar({
  progress,
  variant = "blog",
  className,
}: ProgressBarProps) {
  const variantStyles = {
    blog: "bg-yellow-400",
    garden: "bg-green-400",
    robot: "bg-blue-400",
  };

  return (
    <div
      className={cn(
        "cartoon-border mt-4 h-8 w-full max-w-md overflow-hidden rounded-full bg-gray-200",
        className,
      )}
    >
      <div
        className={cn(
          "h-full transition-all duration-300 ease-in-out",
          variantStyles[variant],
        )}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
