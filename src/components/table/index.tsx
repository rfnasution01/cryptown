import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { Loading } from '../loading'
import './table.css'

export type Column<T> = {
  header: string
  key?: string | number
  renderCell?: (rowData: T) => React.ReactNode
  width?: string
}

export interface ItemTable {
  id?: string
}

type Props<T extends ItemTable, P> = {
  data: T[]
  columns: Column<T>[] | ((props: P) => Column<T>[])
  containerClasses?: string
  maxHeight?: string
  loading?: boolean
  columnProps?: P
  onItemClick?: (rowData: T) => void
  collapseComponent?: React.ReactNode
  checkbox?: boolean
  isAksi?: boolean
  isNumber?: boolean
  currentPage?: number
  pageSize?: number
}

export function Table<T extends ItemTable, P>({
  data,
  columns,
  containerClasses = '',
  maxHeight = 'max-h-[70vh]',
  loading,
  columnProps,
  onItemClick,
  collapseComponent,
  checkbox,
  isNumber,
  currentPage,
  pageSize,
  isAksi,
}: Props<T, P>) {
  const [rowIsOpen, setRowIsOpen] = useState<number | null>(null)

  const columnArray =
    typeof columns === 'function' ? columns(columnProps as P) : columns

  return (
    <div className={`table-container ${containerClasses}`}>
      {/* ----- Loading UI ----- */}
      {loading ? (
        <Loading size="6.4rem" />
      ) : (
        <div
          className="flex flex-col"
          style={{ scrollbarGutter: 'stable', borderRadius: '3rem', maxHeight }}
        >
          {/* ----- No Data/Fallback UI ----- */}
          <table className="table">
            <thead className="text-neutral-white relative z-10 align-top leading-medium">
              <tr>
                {isNumber && pageSize && currentPage && (
                  <th className="w-[5%]">#</th>
                )}

                {/* ----- Table Headers ----- */}
                {columnArray
                  .filter((column) => !column.header.includes('Aksi'))
                  .map((column, colIndex) => (
                    <th
                      className={`text-nowrap ${column.width}`}
                      key={column.key || colIndex.toString()}
                    >
                      {column.header}
                    </th>
                  ))}

                {/* ----- Detail Header ----- */}
                {collapseComponent && (
                  <th className="detail-header">
                    <span>Detail</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data?.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <tr
                      className={clsx(
                        'text-neutral-black',
                        rowIndex % 2 === 0 ? 'odd:bg-surface-disabled' : '',
                      )}
                      onClick={onItemClick ? () => onItemClick(row) : undefined}
                    >
                      {/* ----- Nomor ----- */}
                      {isNumber && currentPage && pageSize && (
                        <td>
                          {currentPage * pageSize + (rowIndex + 1 - pageSize)}
                        </td>
                      )}

                      {/* ----- Table Data ----- */}
                      {columnArray
                        .filter((column) => !column.header.includes('Aksi'))
                        .map((column, colIndex) => (
                          <td
                            className={column.width}
                            key={column.key || colIndex.toString()}
                          >
                            {column.renderCell
                              ? column.renderCell(row)
                              : (row[
                                  column.key as keyof T
                                ] as React.ReactNode) || '-'}
                          </td>
                        ))}

                      {/* ----- Collapse Trigger ----- */}
                      {collapseComponent && (
                        <td>
                          <div>
                            <button
                              className="collapse-btn"
                              onClick={() => {
                                if (rowIsOpen === rowIndex) {
                                  setRowIsOpen(null)
                                } else {
                                  setRowIsOpen(rowIndex)
                                }
                              }}
                            >
                              <span
                                className={clsx('', {
                                  'rotate-180': rowIsOpen === rowIndex,
                                  'rotate-0': rowIsOpen !== rowIndex,
                                })}
                              >
                                <ChevronDown />
                              </span>
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>

                    {/* ----- Collapse Content ----- */}
                    {collapseComponent && (
                      <tr>
                        <td colSpan={columnArray.length + (checkbox ? 2 : 1)}>
                          <div
                            className={clsx(
                              'collapse-content',
                              rowIsOpen === rowIndex ? 'open' : 'closed',
                            )}
                          >
                            {collapseComponent}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))
              ) : (
                <tr className="text-neutral-black">
                  <td
                    colSpan={
                      isAksi && isNumber
                        ? columnArray?.length + 2
                        : isNumber || isAksi
                          ? columnArray?.length + 1
                          : columnArray?.length
                    }
                    className="text-center"
                  >
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
