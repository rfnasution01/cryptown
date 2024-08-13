import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export function Pagination({
  pageNow,
  lastPage,
  setPageNumber,
}: {
  pageNow: number
  lastPage: number
  setPageNumber: Dispatch<SetStateAction<number>>
}) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setPageNumber(page)
    }
  }

  // Calculate the range of pages to display
  const getPageNumbers = () => {
    const pages = []
    const maxPageButtons = 5
    const halfRange = Math.floor(maxPageButtons / 2)

    // Calculate the start and end page numbers
    let startPage = Math.max(1, pageNow - halfRange)
    let endPage = Math.min(lastPage, pageNow + halfRange)

    // Adjust the start and end pages if they don't fit the total number of pages
    if (endPage - startPage + 1 < maxPageButtons) {
      if (startPage === 1) {
        endPage = Math.min(lastPage, startPage + maxPageButtons - 1)
      } else if (endPage === lastPage) {
        startPage = Math.max(1, endPage - maxPageButtons + 1)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center gap-16 phones:gap-8">
      <div className="flex items-center gap-32 phones:gap-12">
        {/* First Button */}
        <button
          onClick={() => handlePageChange(1)}
          disabled={pageNow === 1}
          className="hover:text-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronsLeft size={16} />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(pageNow - 1)}
          disabled={pageNow <= 1}
          className="hover:text-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Page Number Buttons */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`flex h-[4rem] w-[4rem] items-center justify-center rounded-full ${
            page === pageNow
              ? 'bg-primary-100 text-white'
              : 'text-primary-100 hover:bg-primary-100 hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}

      <div className="flex items-center gap-32 phones:gap-12">
        {/* Next Button */}
        <button
          onClick={() => handlePageChange(pageNow + 1)}
          disabled={pageNow >= lastPage}
          className="hover:text-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>

        {/* Last Button */}
        <button
          onClick={() => handlePageChange(lastPage)}
          disabled={pageNow === lastPage}
          className="hover:text-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  )
}
