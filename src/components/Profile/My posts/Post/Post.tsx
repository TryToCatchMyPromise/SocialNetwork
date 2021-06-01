import classes from './Post.module.css'
import {FC} from 'react'

type IPostProps = {
  message: string
  likesCount: number
}

export const Post: FC<IPostProps> = ({message, likesCount}) => {
  return (
    <div className={classes.item}>
      <img src="https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg"/>
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  )

}
