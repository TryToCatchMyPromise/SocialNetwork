import {FC, useState} from 'react'
import {useUsers} from 'src/hooks/useUsers'
import classes from './Paginator.module.css'
import cn from 'classnames'

type IPaginatorProps = {
  portionSize?: number
}

export const Paginator: FC<IPaginatorProps> = ({
                                        portionSize = 10
                                      }) => {

  const {pageSize, currentPage = 1, onPageChanged, totalUsersCount: totalItemsCount} = useUsers()

  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState<number>(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (
    <div className={classes.paginator}>
      {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
            return <span className={cn({
              [classes.selectedPage]: currentPage === p
            }, classes.pageNumber)}
                         key={p}
                         onClick={
                           (e) => {
                             onPageChanged(p)
                           }
                         }>
                  {p}
                </span>
          }
        )
      }
      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
    </div>
  )
}
