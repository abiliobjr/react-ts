import React, { useCallback, useEffect, useState } from 'react'
import { Location, useLocation } from 'react-router-dom'

import Loading from '../../assets/loading.svg'
import CommentLine from '../../components/commentLine'

interface State {
    id: number
    title: string
    body: string
}
const PostPage: React.FC = () => {
    const location = useLocation()
    const { id, title, body } = location.state as State

    const [comments, setComments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchComments = useCallback(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then((fetchedComments) => {
                setComments(fetchedComments);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setComments]);

    useEffect(() => {
        fetchComments()
    }, []);

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>
                {body}
            </p>
            <h2>Comments:</h2>
            {
                isLoading ?
                    <img src={Loading} /> :
                    comments.map(comment => {
                        const { id, name, email, body } = comment
                        return (
                           <CommentLine id={id} name={name} email={email} body={body} />
                        )
                    })
            }
        </div>
    )
}

export default PostPage