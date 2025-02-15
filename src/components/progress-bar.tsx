import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  status: string;
  variant?: "blog" | "garden" | "robot";
  className?: string;
}

export function ProgressBar({
  progress,
  status,
  variant = "blog",
  className,
}: ProgressBarProps) {
  const variantStyles = {
    blog: "bg-yellow-400",
    garden: "bg-green-400",
    robot: "bg-blue-400",
  };
  console.log(status);

  return (
    <div
      className={cn(
        "cartoon-border relative mt-4 h-8 w-full max-w-md overflow-hidden rounded-full bg-gray-200",
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
      <span className="absolute inset-0 flex items-center justify-center font-bold text-black">
        {status}
      </span>
    </div>
  );
}
