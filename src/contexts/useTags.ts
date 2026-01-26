import { useContext } from "react"
import { TagsContext, TagsContextType } from "./TagContextProvider"

export const useTags = (): TagsContextType => {
    const context = useContext(TagsContext)
    if (!context) throw new Error('useTags must be used within TagsProvider')
    return context
}