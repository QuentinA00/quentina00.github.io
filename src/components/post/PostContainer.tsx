import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import styled from "styled-components"

interface PostContainerProps {
    postData: PostInterface
}

const Style = styled.div`
    display: flex;
    max-width: 70rem;
    transition: .1s ease-in-out 0s;

    // style for projects posts
    &.postContainer-project{
        border-radius: 1.5rem;
        padding: 1.5rem;
        background: var(--color3);
        flex-direction: column;
        row-gap: 2.5rem;
    }

    // style for presentation post
    &.postContainer-presentation{
        font-size: 1.1rem;

        & .postContentSection{
            & .postContentSection-description{
                & .postContentSection-text{
                    font-weight: 200;
                }
            }
        }
    }

    // style for mobile < 700
    &.postContainer-mobile{
        width: unset;
        row-gap: 3rem;
    }

    // style for tablet < 1000
    &.postContainer-tablet{
        width: unset;
    }
`

const PostContainer:React.FC<PostContainerProps & PostVariantProps> = ({ postData, variantType }) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})
    const tabletScreen = useMediaQuery({maxWidth:screen_tablet})

    return (
        <Style 
            className={`
                postContainer 
                ${variantType ? 'postContainer-'+variantType : ''}
                ${mobileScreen ? 'postContainer-mobile' : ''}
                ${tabletScreen ? 'postContainer-tablet' : ''}
            `}
        >
            {/* ##### hide the top section in the presentation section */}
            {variantType == 'project' && <PostTopSection postData={postData} variantType={variantType}/>}

            <PostContentSection postData={postData} variantType={variantType}/>
        </Style>
    )
}

export default PostContainer