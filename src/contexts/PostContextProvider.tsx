import { createContext, FC, ReactNode, useContext } from "react"
import { PostInterface, PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"
import posts from '../../public/assets/jsons/posts.json'
import { useLanguage } from "./LanguageContextProvider"

interface PostContextType {
    posts: PostsInterfaceWithLanguage
    getPresentationPost: () => PostInterface[]
    getProjectPosts: () => PostInterface[]
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export const PostProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const {currentLanguage} = useLanguage()

    const getPresentationPost = () => {
        return posts[currentLanguage].presentation
    }
    const getProjectPosts = () => {
        return posts[currentLanguage].projects
    }

    return (
        <PostContext.Provider value={{getPresentationPost, getProjectPosts, posts}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => {
    const context = useContext(PostContext)
    if (!context) throw new Error('usePost must be used within a PostProvider')
    return context
}