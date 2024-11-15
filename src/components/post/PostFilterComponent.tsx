import { useContext } from "react"
import styled from "styled-components"
import { PostsContext } from "../../contexts/PostsContextProvider"

const Style = styled.div`
    display:flex;
`

const PostFilterComponent = () => {

    const {projectsPosts} = useContext(PostsContext)

    let tagsList = []

    const tags = projectsPosts.map((project) => {
        project.tags?.map((projectTag) => {
            projectTag.text
        })
    })

    return (
        <Style>

        </Style>
    )
}

export default PostFilterComponent