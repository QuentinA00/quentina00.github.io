import { useMediaQuery } from "react-responsive"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import styled from "styled-components"

import PostPresentationLayout from "./layouts/PostPresentationLayout"
import PostProjectLayout from "./layouts/PostProjectLayout"

const StyleContainer = styled.div`
    display: flex;
    max-width: 70rem;
    transition: .1s ease-in-out 0s;

    // style for projects posts
    &.postContainer-project{
        border-radius: 1.5rem;
        padding: 2rem;
        background: var(--color3);
        flex-direction: column;
        row-gap: 2.5rem;
        backdrop-filter:blur(3rem);
    }

    // style for presentation post
    &.postContainer-presentation{
        font-size: 1.1rem;

        & .postContentSection{ // ----- deprecated
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

    /* --------------- postContentSection --------------- */
    .postContentSection{
        display: flex;
        column-gap: 2rem;
        transition: .1s ease-in-out 0s;

        & .postContentSection-description{
            display: flex;
            flex-direction: column;
            flex: 2;
            row-gap: 2rem;
        }

        &.postContentSection-smallerScreen{
            flex-direction: column;
            row-gap: 2rem;
        }
        &.postContentSection-presentation{
            & .postContentSection-description{
                row-gap: 5rem;
            }
        }
    }

    /* --------------- postTopSection --------------- */
    .postTopSection {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        transition: .1s ease-in-out 0s;

        &.postTopSection-mobile{
            row-gap: 2rem;
        }
    }
`

interface PostContainerProps {
    postData: PostInterface
}

const PostContainer:React.FC<PostContainerProps & PostVariantProps> = ({ postData, variantType }) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})
    const tabletScreen = useMediaQuery({maxWidth:screen_tablet})

    return (
        <StyleContainer 
            className={`
                postContainer 
                ${variantType ? 'postContainer-'+variantType : ''}
                ${mobileScreen ? 'postContainer-mobile' : ''}
                ${tabletScreen ? 'postContainer-tablet' : ''}
            `}
        >
            {variantType === 'presentation' 
                ? 
                    <PostPresentationLayout postData={postData} tabletScreen={tabletScreen} />
                :
                    <PostProjectLayout postData={postData} tabletScreen={tabletScreen} mobileScreen={mobileScreen} />
            }

        </StyleContainer>
    )
}

export default PostContainer