import { Search, X } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'

export function Searching({
  className,
  setPageNumber,
  setSearch,
  placeHolder,
}: {
  className?: string
  setPageNumber?: Dispatch<SetStateAction<number>>
  setSearch?: Dispatch<SetStateAction<string>>
  placeHolder?: string
}) {
  const [query, setQuery] = useState<string>('')

  const debouncedSearch = useMemo(() => {
    return debounce((searchQuery: string) => {
      if (setPageNumber) setPageNumber(1)
      if (setSearch) setSearch(searchQuery)
    }, 1000) // 1-second debounce
  }, [setPageNumber, setSearch])

  useEffect(() => {
    debouncedSearch(query)

    // Cleanup function to cancel the debounce on unmount or when query changes
    return () => {
      debouncedSearch.cancel()
    }
  }, [query, debouncedSearch])

  const handleClear = () => {
    setQuery('')
    if (setSearch) setSearch('')
  }

  return (
    <div className={`flex ${className} relative`}>
      <input
        type="text"
        className="pr-40 w-full rounded-bl-2xl rounded-tl-2xl border border-gray-300 p-16 text-[2rem] focus:border-cryptown-deep-blue focus:outline-none focus:ring-cryptown-deep-indigo phones:w-full"
        placeholder={placeHolder ?? 'Search'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <button
          className="absolute right-64 top-1/2 -translate-y-1/2 transform text-gray-500"
          type="button"
          onClick={handleClear}
        >
          <X size={16} />
        </button>
      )}

      <button
        className={`bg-cryptown-deep-blue px-12 text-[2.4rem] text-white`}
        type="button"
        style={{
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
        onClick={() => debouncedSearch(query)}
      >
        <Search size={16} />
      </button>
    </div>
  )
}
