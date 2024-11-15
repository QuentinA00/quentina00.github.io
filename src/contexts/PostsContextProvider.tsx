import { createContext, FC } from "react"
import { ContextProviderProps } from "../interfaces/globalPropsInterfaces"
import posts from '../../public/assets/jsons/posts.json'

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ------------------------------------------ interfaces for the posts ↓
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

interface PostsInterfaceWithLanguage {
    en:PostsInterface
    fr:PostsInterface
}

// the whole interface
interface PostsInterface {
    presentation:PostInterface[]
    projects:PostInterface[]
}

// interface for a single post item
interface PostInterface {
    id: string
    projectOrigin?: string
    title?:string
    description?:string
    tags?: PostTagsInterface[]
    postTextParagraphs: string[]
    postTextKeyPoints?:{
        text:string
        points: PostTextKeyPointsInterface[]
    }
    postsLinks:PostLinksInterface[]
    medias?: {
        images?:PostMediasInterface[]
        videos?:PostMediasInterface[]
    }
}

// interface for the links of the project
interface PostMediasInterface {
    id:number
    linkPath:string
    linkPathHd?:string
    text:string
}

// interface for the tags
interface PostTagsInterface {
    id: string
    text: string
}

// interface for the link
interface PostLinksInterface {
    linkName: string
    link:string
}

interface PostTextKeyPointsInterface{
    id:number
    text:string
}

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ------------------------------------------ interfaces for the context component ↓
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

interface PostContextProps {
    projectsPosts:PostInterface[]
    presentationPosts:PostInterface[]
}

const PostsContext = createContext<PostContextProps>({
    presentationPosts:[],
    projectsPosts:[]
})

const PostsContextProvider:FC<ContextProviderProps> = ({children}) => {

    // temporary, when the language and appContent contexts will be ready, we'll use them to change the value of language (fr, en) dynamically
    const presentationPosts = posts.en.presentation

    const projectsPosts = posts.en.projects

    return (
        <PostsContext.Provider value={{presentationPosts, projectsPosts}}>
            {children}
        </PostsContext.Provider>
    )
}

export {PostsContextProvider, PostsContext}