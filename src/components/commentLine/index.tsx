import React from 'react'
import { Link } from 'react-router-dom'

type CommentProps = {
    id: number
    name: string
    email: string
    body: string

}

const CommentLine: React.FC<CommentProps> = ({ id, name, email, body }) => {
    return (
        <article className="comment-line" key={id}>
            <p className="name">
                <span>Name:</span> {name}
            </p>
            <p className="email">
            <span>Email:</span> {email}
            </p>
            <p className="body">
            <span>Comment:</span> {body}
            </p>
        </article>
    )
}

export default CommentLine