import { createContext, FC, ReactNode, useContext } from "react"
import { TagInterface } from "../interfaces/postsInterfaces"
import tags from '../../public/assets/jsons/tags.json'

interface TagsContextType {
    tags: TagInterface[]
    getTagById: (id: string) => TagInterface | undefined
    getTagsByIds: (ids:string[]) => TagInterface[]
}

const TagsContext = createContext<TagsContextType | undefined>(undefined)

export const TagsProvider: FC<{ children: ReactNode }> = ({ children }) => {

    // return the tag that has the id given as parameter
    // if no match, return undefined
    const getTagById = (id:string) => {
        return tags.find(tag => tag.id == id)
    }

    // return the tags objects, from an array of tag id
    const getTagsByIds = (ids:string[]) => {
        return ids.map((id => getTagById(id))).filter((tag): tag is TagInterface => Boolean(tag)) // the filter here retain only the tag object (and filter out the case where getTagById return undefined)
    }

    return (
        <TagsContext.Provider value={{tags,getTagById, getTagsByIds}}>
            {children}
        </TagsContext.Provider>
    )
}

export const useTags = () => {
    const context = useContext(TagsContext)
    if (!context) throw new Error('useTags must be used within TagsProvider')
    return context
}