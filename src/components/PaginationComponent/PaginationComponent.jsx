import React from 'react'
import { PaginationWrapper } from "./style"

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </PaginationWrapper>
  );
};


export default PaginationComponent
