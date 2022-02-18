import React, { createContext, useContext } from 'react'

export interface Post {
    id: number
    title: string
    body: string
}

export interface PostsContextData {
    posts: Post[]
    isLoading: boolean
    fetchPosts: () => void
}

export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    isLoading: false,
    fetchPosts: () => null,
    
}

export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);
