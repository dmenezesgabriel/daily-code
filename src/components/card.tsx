import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "./button";

type CardVariant = "post" | "garden";

type CardRootProps = {
  children: ReactNode;
  variant?: CardVariant;
};

type CardIconProps = {
  category: string;
  children: ReactNode;
  variant?: CardVariant;
};

type CardFooterProps = {
  date: string;
  id: string;
  variant?: CardVariant;
};

function Root({ children }: CardRootProps) {
  return (
    <div className="cartoon-border subtle-card-texture h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      <div className="flex h-full flex-col bg-white bg-opacity-90 p-6">
        {children}
      </div>
    </div>
  );
}

function Icon({ category, children, variant = "post" }: CardIconProps) {
  const baseStyles =
    "cartoon-border mb-4 flex items-center justify-center rounded-full";
  const sizeStyles = variant === "post" ? "h-16 w-16" : "h-12 w-12";
  const colorStyles =
    variant === "post" ? getCategoryColor(category) : "bg-green-400";

  return (
    <div className={`${baseStyles} ${sizeStyles} ${colorStyles}`}>
      {children}
    </div>
  );
}

function Category({
  children,
  variant = "post",
}: {
  children: ReactNode;
  variant?: CardVariant;
}) {
  const colorClass = variant === "post" ? "text-red-600" : "text-green-600";
  return (
    <span className={`mb-2 block text-sm font-semibold ${colorClass}`}>
      {children}
    </span>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <h2 className="mb-2 text-2xl font-bold text-gray-900">{children}</h2>;
}

function Excerpt({ children }: { children: ReactNode }) {
  return <p className="mb-4 flex-grow text-gray-700">{children}</p>;
}

function Footer({ date, id, variant = "post" }: CardFooterProps) {
  const href = variant === "post" ? `/blog/${id}` : `/garden/${id}`;
  return (
    <div className="mt-auto flex items-center justify-between">
      <span className="text-sm text-gray-500">{date}</span>
      {variant === "post" ? (
        <Link
          href={href}
          className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Leia mais!
        </Link>
      ) : (
        <Link href={href}>
          <Button variant="garden" size="sm">
            Explore a nota!
          </Button>
        </Link>
      )}
    </div>
  );
}

function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case "design":
      return "bg-pink-400";
    case "development":
      return "bg-blue-400";
    case "ux":
      return "bg-green-400";
    default:
      return "bg-gray-400";
  }
}

export const Card = {
  Root,
  Icon,
  Category,
  Title,
  Excerpt,
  Footer,
};
