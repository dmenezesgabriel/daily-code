import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Previous
        </Link>
      )}
      <span className="text-xl font-bold">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Next
        </Link>
      )}
    </div>
  );
}
