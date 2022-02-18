import React, { useContext } from 'react'
import { PostsContext } from '../../store/posts.store';
import PostCard from '../postCard'

const PostsList = () => {
    const { posts } = useContext(PostsContext);
    return (
        <div className='container'>
            {
                posts.map(post => (
                    <PostCard id={post.id} title={post.title} body={post.body} />
                ))
            }
        </div>
    )
}

export default PostsList