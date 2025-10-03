import { FC } from "react"
import styled from "styled-components"
import Tag from "./Tag"

const Style = styled.div`
    display: flex;
    gap: .8rem;
    flex-wrap: wrap;
`

interface PostTagsProps {
    tagsId?:string[]
    tagClassName?:'presentation'|'project'
}

const PostTags:FC<PostTagsProps> = ({tagsId, tagClassName}) => {
    return (
        <Style>
            {tagsId?.map((tagId) => 
                <Tag key={tagId} tagId={tagId} className={tagClassName}/>
            )}
        </Style>
    )
}

export default PostTags