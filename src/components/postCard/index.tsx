import React from 'react'
import { Link } from 'react-router-dom'

type PostProps = {
    id: number,
    title: string,
    body: string

}

const PostCard: React.FC<PostProps> = ({id, title, body}) => {
    return (
        <article className="post-card" key={id}>
            <h3>
            <Link className='title'to={`/post/${id}`} state={{id, title, body}}>
                {title}
            </Link>
            </h3>
            <p className='body'>
                {body}
            </p>
            <Link className='seemore btn -secondary' to={`/post/${id}`} state={{id, title, body}}>
                Leia Mais
            </Link>
        </article>
    )
}

export default PostCard