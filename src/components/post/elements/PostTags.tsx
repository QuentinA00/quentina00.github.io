import { FC } from "react"
import styled from "styled-components"
import Tag from "../../Tag"

const StyleContainer = styled.div`
    display: flex;
    gap: .8rem;
    flex-wrap: wrap;
`

interface PostTagsProps {
    tagsId?:string[]
    tagVariant?:'presentation'|'project'
}

const PostTags:FC<PostTagsProps> = ({tagsId, tagVariant}) => {

    if (!tagsId || tagsId.length === 0) return null

    return (
        <StyleContainer>
            {tagsId?.map((tagId) => 
                <Tag key={tagId} tagId={tagId} variant={tagVariant}/>
            )}
        </StyleContainer>
    )
}

export default PostTags