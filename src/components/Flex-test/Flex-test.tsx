import {FC} from 'react'
import classes from './Flex-test.module.css'


export const FlexTest: FC = () => {

  const data = ['one', 'two', 'three', 'four', 'five', 'six']

  return (
    <div className={classes.flexContainer}>
      {data.map((block) => {
        return <div className={classes.block}>{block}</div>
      })}
    </div>
  )
}
