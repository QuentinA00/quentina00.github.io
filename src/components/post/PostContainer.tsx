import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import styled from "styled-components"
import PostLinks from "./PostLinks"
import PostKeypoints from "./PostKeypoints"
import PostText from "./PostText"
import MediaComponent from "../MediaComponent"
import PostTags from "./PostTags"
import PostTitle from "./postTitle"
import PostOrigin from "./PostOrigin"

const StyleContainer = styled.div`
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
            {/* ##### hide the top section in the presentation section */}
            {variantType == 'project' && <PostTopSection postData={postData} variantType={variantType}/>}

            <PostContentSection postData={postData} variantType={variantType}/>
            
            {/* ----- new implementation for posts ----- */}
            {variantType === 'presentation' 
            ? 
                <div className={`postContentSection ${tabletScreen ? 'postContentSection-smallerScreen' : ''} ${variantType == 'presentation' ? 'postContentSection-presentation' : ''}`}>
                    <div className="postContentSection-description">
                        <PostText textParagraphs={postData.postTextParagraphs} className="postText-presentation"/>
                        <div className={`postTopSection ${tabletScreen ? 'postTopSection-mobile' : ''}`}>
                            <PostTags tagsId={postData.tagsId} tagClassName='presentation' />
                        </div>
                        <PostLinks links={postData.postsLinks} linkTarget='_self' />
                    </div>
                </div>
            : 
                <div className={`postContentSection ${tabletScreen ? 'postContentSection-smallerScreen' : ''} ${variantType == 'project' ? 'postContentSection-presentation' : ''}`}>
                    <div className={`postTopSection ${tabletScreen ? 'postTopSection-mobile' : ''}`}>
                        <PostOrigin postOrigin={postData.projectOrigin}/>
                        <PostTitle title={postData.title} description={postData.description} showDot={!tabletScreen && !!postData.description} className={mobileScreen ? 'postTitle-mobile' : ''}/>
                        <PostTags tagsId={postData.tagsId} tagClassName='presentation' />
                    </div>
                    <MediaComponent medias={postData.medias}/>
                    <div className="postContentSection-description">
                        <PostText textParagraphs={postData.postTextParagraphs}/>
                        <div className="divider3"></div>
                        <PostKeypoints keypoints={postData.postTextKeyPoints?.points} keypointsTitle={postData.postTextKeyPoints?.text}/>
                        <PostLinks links={postData.postsLinks} linkTarget='_blank' />
                    </div>
                </div>
            }

        </StyleContainer>
    )
}

export default PostContainer