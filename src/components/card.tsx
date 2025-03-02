import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { getCategoryColor } from "@/lib/category-utils";

import { Button } from "./button";

type CardVariant = "blog" | "garden";

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
  date?: string;
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

function Icon({ category, children, variant = "blog" }: CardIconProps) {
  const baseStyles =
    "cartoon-border mb-4 flex items-center justify-center rounded-full";
  const sizeStyles = variant === "blog" ? "h-16 w-16" : "h-12 w-12";
  const colorStyles =
    variant === "blog" ? getCategoryColor(category) : "bg-green-400";

  return (
    <div className={`${baseStyles} ${sizeStyles} ${colorStyles}`}>
      {children}
    </div>
  );
}

function Category({
  children,
  variant = "blog",
}: {
  children: ReactNode;
  variant?: CardVariant;
}) {
  const colorClass = variant === "blog" ? "text-red-600" : "text-green-600";
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

type CardMediaProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

function Media({
  src,
  alt,
  width = 800,
  height = 400,
  priority = false,
}: CardMediaProps) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}

function Footer({ date, id, variant = "blog" }: CardFooterProps) {
  const href = variant === "blog" ? `/blog/${id}` : `/garden/${id}`;
  return (
    <div className="mt-auto flex items-center justify-between">
      <span className="text-sm text-gray-500">{date}</span>
      <Link href={href}>
        <Button variant={variant} size="md">
          Leia mais!
        </Button>
      </Link>
    </div>
  );
}

export const Card = {
  Root,
  Icon,
  Category,
  Title,
  Excerpt,
  Media,
  Footer,
};
