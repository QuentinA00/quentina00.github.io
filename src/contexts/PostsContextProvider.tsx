import { createContext, FC, ReactNode } from "react"
// import { ContextProviderProps } from "../interfaces/globalPropsInterfaces"
import posts from '../../public/assets/jsons/posts.json'

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// interfaces for the posts ↓
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
// interfaces for the context component ↓
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

interface PostContextProps {
    projectsPosts:PostInterface[]
    presentationPosts:PostInterface[]

    // react-query implementation (useQuery return these 2 values)
    // isLoading: boolean
    // error: Error | null
}

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

const PostsContext = createContext<PostContextProps | undefined>(undefined)

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// implementation of fetch, using react-query (useQuery method) ↓
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// const fetchPosts = async (): Promise<PostsInterface> => {
//     const response = await fetch('./assets/jsons/posts.json')
//     if (!response.ok) throw new Error('Failed to fetch posts')
//     return response.json()
// }

const PostsContextProvider:FC<{children:ReactNode}> = ({children}) => {

    // temporary, when the language and appContent contexts will be ready, we'll use them to change the value of language (fr, en) dynamically
    const presentationPosts = posts.en.presentation
    const projectsPosts = posts.en.projects

    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
    // implementation of fetch, using react-query (useQuery method) ↓
    // ---------------------------------------------------------------------------------------

    // while waiting for language context to be available
    // const language = "en"
    
    // // the function useQuery return an object : { data: exampleData, isLoading: true, error: null }
    // // So, in the destructuring below, we assign a default values for both "fr" and "en" and for presentation and project
    // const { data = { en: { presentation: [], projects: [] }, fr: { presentation: [], projects: [] } }, isLoading, error } = useQuery(['posts'], fetchPosts)
    
    // // both are set to english for now, since the language context isn't available yet
    // const presentationPosts = data[language]?.presentation || []
    // const projectsPosts = data[language]?.projects || []
    
    // ---------------------------------------------------------------------------------------
    // end of react-query implementation
    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------

    return (
        <PostsContext.Provider value={{presentationPosts, projectsPosts}}>
            {children}
        </PostsContext.Provider>
    )
}

export {PostsContextProvider, PostsContext}