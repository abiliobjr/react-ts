import React, { createContext, useContext } from 'react'

interface CommentType {
    id: number
    title: string
    body: string
}

interface PostType {
    id: number
    title: string
    body: string
    comments: CommentType[]
}

export interface PostsContextData {
    posts: PostType[]
    setState: React.Dispatch<React.SetStateAction<PostType[]>>
}

export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    setState: () => {}
}

export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);
