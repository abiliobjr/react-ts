import React, { useState } from 'react'
import { Location, useLocation } from 'react-router-dom'

interface State {
    title: string
    body: string
}
const PostPage: React.FC = () => {
    const location = useLocation()
    const { title, body } = location.state as State


    return (
        <div className="container">
            <h1>{title}</h1>
            <p>
                {body}
            </p>
        </div>
    )
}

export default PostPage