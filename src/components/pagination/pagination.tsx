import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { ArrowIos } from '../../assets/icons'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Select, SelectProps } from '../select'
import { Typography } from '../typography'
import { usePagination } from './usePagination'

type PaginationSlot = 'pagination' | 'root' | 'selectContainer'
export type PaginationClasses = { [P in PaginationSlot]?: string }

type Props = {
  classes?: PaginationClasses
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
  translates?: { onPage: string; show: string }
} & Omit<SelectProps, 'classes' | 'labelField' | 'pagination'>

export const Pagination = ({
  classes,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  translates,
  ...selectProps
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  const cls = getClassNames(classes)

  const selectForPage = (
    <div className={cls.selectContainer}>
      <Typography.Regular14>{translates ? translates.show : 'Show'}</Typography.Regular14>
      <Select classes={{ root: s.select }} pagination {...selectProps} />
      <Typography.Regular14>{translates ? translates.onPage : 'on page'}</Typography.Regular14>
    </div>
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
    <div className={cls.root}>
      <div className={cls.pagination}>
        <IconButton
          className={clsx(s.item, { [s.disabled]: isFirstPage })}
          disabled={isFirstPage}
          onClick={handleClickPrev}
        >
          <ArrowIos className={s.left} height={20} width={20} />
        </IconButton>
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
              className={clsx(s.item, isCurrentPage && s.selected)}
              key={i}
              onClick={handleChangePage}
              variant={isCurrentPage ? 'primary' : 'tertiary'}
            >
              <Typography.Regular14>{num}</Typography.Regular14>
            </Button>
          )
        })}
        <IconButton
          className={clsx(s.item, { [s.disabled]: isLastPage })}
          disabled={isLastPage}
          onClick={handleClickNext}
        >
          <ArrowIos className={s.right} height={20} width={20} />
        </IconButton>
      </div>
      {selectForPage}
    </div>
  )
}

const getClassNames = (classes?: PaginationClasses) => ({
  pagination: clsx(s.pagination, classes?.pagination),
  root: clsx(s.root, classes?.root),
  selectContainer: clsx(s.selectContainer, classes?.selectContainer),
})
