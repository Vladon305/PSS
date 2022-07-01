import React from 'react'
import { PostType } from '../../types/types'
import AddPostForm from '../AddPost/AddPostFormContainer'
import Post from './Post'

type PropsType = {
  posts: Array<PostType>
}

const Blog: React.FC<PropsType> = ({ posts }) => {
  return (
    <div className='Blog'>
      <main className="page">
        <div className="container">
          <h1 className="blog__title title">Blog</h1>
          <AddPostForm />
          <div className="blog__items">
            {posts.map(p => <Post
              title={p.title}
              data={p.data}
              category={p.category}
              text={p.text}
              key={p.id}
              id={p.id} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog