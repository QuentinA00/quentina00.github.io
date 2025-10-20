import styled from "styled-components"
import { FC } from "react"
import { PostLinkInterface } from "../../../interfaces/postsInterfaces"

interface PostLinksProps {
    links?:PostLinkInterface[]
    linkTarget:'_self' | '_blank'
}

const StyleContainer = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
`

const PostLinks: FC<PostLinksProps> = ({links, linkTarget}) => {
    if (!links || links.length === 0) return null
    return (
        <StyleContainer>
            {links.map((link) => <a 
                key={link.link} 
                className="regularLink" 
                href={link.link} 
                target={linkTarget}>{link.linkName}</a>
            )}
        </StyleContainer>
    )
}

export default PostLinks