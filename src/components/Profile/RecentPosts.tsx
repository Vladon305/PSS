import React from 'react'
import { NavLink } from 'react-router-dom'
import { PostType } from '../../types/types'
import Post from '../Blog/Post'

type PropsType = {
  posts: Array<PostType>
}

const RecentPosts: React.FC<PropsType> = ({ posts }) => {

  function returnLastItem(arr: Array<PostType>) {
    return [arr[arr.length - 1]]
  }
  function returnPreLastItem(arr: Array<PostType>) {
    return [arr[arr.length - 2]]
  }
  let lastElement = returnLastItem(posts)
  let preLastElement = returnPreLastItem(posts)

  return (
    <section className="recent-posts">
      <div className="recent-posts__header">
        <div className="recent-posts__title title-posts"> Recent posts</div>
        <NavLink className="recent-posts__view-all" to="/Blog">View all</NavLink>
      </div>
      <div className="recent-posts__items">
        <div className="recent-posts__column">
          {lastElement.map(p => <Post title={p.title} data={p.data} category={p.category} text={p.text} key={p.id} id={p.id} />)}
        </div>
        <div className="recent-posts__column">
          {preLastElement.map(p => <Post title={p.title} data={p.data} category={p.category} text={p.text} key={p.id} id={p.id} />)}
        </div>
      </div>
    </section>
  )
}
export default RecentPosts