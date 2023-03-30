"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Pagination({ currentPage, totalPages, totalMovies }) {
  console.log(totalPages);
  currentPage = +currentPage;
  const pageList = Array.from({ length: 9 }, (_, i) => {
    if (currentPage < 5) return i + 1;
    else if (currentPage > totalPages - 4) return i + totalPages - 8;
    return i + currentPage - 4;
  });

  return (
    <nav className="flex justify-between pt-10">
      {currentPage > 1 ? (
        <button className="border border-white rounded-md px-5 y-3 hover:bg-neutral-800">
          <Link href={`/?page=${+currentPage - 1}`}>Previous</Link>
        </button>
      ) : (
        <div></div>
      )}
      <ul className="flex gap-2">
        {pageList.map((page) => (
          <li key={page}>
            <Link
              className={`border border-white rounded-md px-3 py-1 hover:bg-neutral-800 ${
                page === currentPage ? "bg-neutral-600" : ""
              }`}
              href={`/?page=${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      {currentPage < totalPages ? (
        <button className="border border-white rounded-md px-5 y-3 hover:bg-neutral-800">
          <Link href={`/?page=${+currentPage + 1}`}>Next</Link>
        </button>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
