import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { ArrowIos } from '../../assets/icons'
import { Button } from '../button'
import { Typography } from '../typography'
import { usePagination } from './usePagination'

type Props = {
  className?: string
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
  translates?: { onPage: string; show: string }
}

export const Pagination = ({
  className,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  translates, // ...selectProps
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  const selectForPage = (
    <Typography.Regular14 asComponent={'div'} className={s.selectContainer}>
      {translates ? translates.show : 'Show'}
      {/*<Select {...selectProps} className={s.select} pagination />*/}
      {translates ? translates.onPage : 'on page'}
    </Typography.Regular14>
  )

  if (currentPage === 0 || paginationRange.length < 2) {
    return selectForPage
  }

  const handleClickPrev = () => {
    onChangePage(currentPage - 1)
  }

  const handleClickNext = () => {
    onChangePage(currentPage + 1)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.pagination}>
        <button
          className={clsx(s.item, { [s.disabled]: isFirstPage })}
          disabled={isFirstPage}
          onClick={handleClickPrev}
        >
          <ArrowIos className={s.left} height={20} width={20} />
        </button>
        {paginationRange.map((num, i) => {
          if (num === 0) {
            return (
              <span className={clsx(s.item, s.dots)} key={i}>
                &#8230;
              </span>
            )
          }
          const isCurrentPage = num === currentPage

          const handleChangePage = () => onChangePage(num)

          return (
            <Button
              className={clsx(s.item, { [s.selected]: isCurrentPage })}
              key={i}
              onClick={handleChangePage}
            >
              <Typography.Regular14 asComponent={'span'}>{num}</Typography.Regular14>
            </Button>
          )
        })}
        <button
          className={clsx(s.item, { [s.disabled]: isLastPage })}
          disabled={isLastPage}
          onClick={handleClickNext}
        >
          <ArrowIos className={s.right} height={20} width={20} />
        </button>
      </div>
      {selectForPage}
    </div>
  )
}
