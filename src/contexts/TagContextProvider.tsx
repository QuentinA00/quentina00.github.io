import { createContext, FC, ReactNode, useContext } from "react"
import { TagGroupedByCategory, TagInterface } from "../interfaces/postsInterfaces"
import tags from '../../public/assets/jsons/tags.json'

interface TagsContextType {
    tags: TagInterface[]
    getTagById: (id: string) => TagInterface | undefined
    getTagsByIds: (ids:string[]) => TagInterface[]
    getTagsGroupedByCategory: (ids:string[]) => TagGroupedByCategory[]
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

        // checking whether the method groupBy exist in the browser context
        // because groupBy is a ES2024 feature so it may not be compatible with all browsers
        const hasGroupBy = typeof (Object as any).groupBy === 'function'
        
        // return an object with the category as string and then an array of the tags that belong to this category
        // if the browser don't support groupBy, return another way to achieve the same result
        const groupedTags: Record<string, TagInterface[]> = hasGroupBy
            ? (Object as any).groupBy(tagsObjects, (tag:TagInterface) => tag.category)
            : tagsObjects.reduce((acc,t) => {
                (acc[t.category] ||= []).push(t)
                return acc
            },{} as Record<string,TagInterface[]>)
        
        // console.log('------ tag context getTagsGroupedByCategory ------',groupedTags)

        return Object.keys(groupedTags)
            // .sort().reverse()
            // retrieve the tag object from groupedTags for each category
            .map(category => ({category, tags: groupedTags[category]}))
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