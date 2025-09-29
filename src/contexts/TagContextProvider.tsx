import { createContext, FC, ReactNode, useContext } from "react"
import { TagInterface } from "../interfaces/postsInterfaces"
import tags from '../../public/assets/jsons/tags.json'

interface TagsContextType {
    tags: TagInterface[]
    getTagById: (id: string) => TagInterface | undefined
    getTagsByIds: (ids:string[]) => TagInterface[]
    getTagsGroupedByCategory: (ids:string[]) => Record<string, TagInterface[]>
}

const TagsContext = createContext<TagsContextType | undefined>(undefined)

export const TagsProvider: FC<{ children: ReactNode }> = ({ children }) => {

    // return the tag that has the id given as parameter
    // if no match, return undefined
    const getTagById = (id:string) => {
        return tags.find(tag => tag.id === id)
    }

    // return the tags objects, from an array of tag id
    const getTagsByIds = (ids:string[]) => {
        return ids.map((id => getTagById(id))).filter((tag): tag is TagInterface => Boolean(tag)) // the filter here retain only the tag object (and filter out the case where getTagById return undefined)
    }

    // return the tags grouped into their categories
    const getTagsGroupedByCategory = (ids:string[]) => {
        const tagsObjects = getTagsByIds(ids)
        const hasGroupBy = typeof (Object as any).groupBy === 'function'
        
        if (hasGroupBy) {
            return (Object as any).groupBy(tagsObjects, (tag:TagInterface) => tag.category) as Record<string,TagInterface[]>
        }
        
        // if the browser don't support groupBy, return another way to achieve the same result
        // because groupBy is a ES2024 feature so it may not be compatible with all browsers
        return tagsObjects.reduce((acc, t) => {
            console.log('groupBy function not available'),
            (acc[t.category] ||= []).push(t)
            return acc
        }, {} as Record<string, TagInterface[]>)
    }

    return (
        <TagsContext.Provider value={{tags,getTagById, getTagsByIds, getTagsGroupedByCategory}}>
            {children}
        </TagsContext.Provider>
    )
}

export const useTags = () => {
    const context = useContext(TagsContext)
    if (!context) throw new Error('useTags must be used within TagsProvider')
    return context
}