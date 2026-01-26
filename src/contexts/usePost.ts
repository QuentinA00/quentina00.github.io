import { useContext } from "react"
import { PostContext, PostContextType } from "./PostContextProvider"

export const usePost = ():PostContextType => {
    const context = useContext(PostContext)
    if (!context) throw new Error('usePost must be used within a PostProvider')
    return context
}