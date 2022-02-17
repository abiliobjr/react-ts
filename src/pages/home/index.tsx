import React from 'react'
import PostsList from '../../components/postList'
import { PostsContext, postsContextDefaultValue } from '../../store/posts.store'

const Home = () => {
  return (
    <PostsContext.Provider value={ postsContextDefaultValue } >
      <PostsList />
    </PostsContext.Provider >
    )
}

export default Home