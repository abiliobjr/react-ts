import React, { useCallback, useEffect, useState } from 'react'
import PostsList from '../../components/postList'
import { Post, PostsContext, postsContextDefaultValue } from '../../store/posts.store'
import Loading from '../../assets/loading.svg'

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [setPosts]);

  useEffect(() => {
    fetchPosts()
  }, []);


  return (
    <PostsContext.Provider value={{posts,  isLoading, fetchPosts}} >
      {
        isLoading ?
          <img src={Loading} />:
          <PostsList />
      }
    </PostsContext.Provider >
    )
}

export default Home