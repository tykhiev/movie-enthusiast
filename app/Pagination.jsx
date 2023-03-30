"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Pagination({
  currentPage,
  moviesPerPage,
  totalMovies,
}) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalMovies / moviesPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [totalMovies, moviesPerPage]);

  return (
    <nav className="flex justify-center">
      <ul className="flex">
        {pageNumbers.map((page) => (
          <li key={page}>
            <Link href={`/?page=${page}`}>
              <a
                className={`pagination-link${
                  page === currentPage ? " is-current" : ""
                }`}
              >
                {page}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
