import React, { useContext } from 'react'
import { PostsContext } from '../../store/posts.store';
import PostCard from '../postCard'

const PostsList = () => {
    const { posts } = useContext(PostsContext);
    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsList