import { createContext, FC, ReactNode, useContext } from "react"
import { TagInterface } from "../interfaces/postsInterfaces"
import tags from '../../public/assets/jsons/tags.json'

interface TagsContextType {
    tags: TagInterface[]
    getTagById: (id: string) => TagInterface | undefined
}

const TagsContext = createContext<TagsContextType | undefined>(undefined)

export const TagsProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const getTagById = (id:string) => {
        return tags.find(tag => tag.id == id)
    }

    return (
        <TagsContext.Provider value={{tags,getTagById}}>
            {children}
        </TagsContext.Provider>
    )
}

export const useTags = () => {
    const context = useContext(TagsContext)
    if (!context) throw new Error('useTags must be used within TagsProvider')
    return context
}