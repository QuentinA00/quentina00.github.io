import { useMediaQuery } from "react-responsive"
import { screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import PostTopSection from "./PostTopSection"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import PostText from "./PostText"
import PostKeypoints from "./PostKeypoints"
import PostLinks from "./PostLinks"
import { lazy, Suspense, useRef } from "react"
import { useInView } from "framer-motion"

interface PostContentSectionProps {
    postData: PostInterface
}

const MediaComponent = lazy(() => import("../MediaComponent"))

const PostContentSection:React.FC<PostContentSectionProps & PostVariantProps> = ({postData, variantType}) => {

    const smallerScreen = useMediaQuery({maxWidth:screen_tablet})

    const containerRef = useRef<HTMLDivElement | null>(null)
    const inView = useInView(containerRef, { margin: "200px 0px 200px 0px", amount: 0 })

    return (
        <div ref={containerRef} className={`postContentSection ${smallerScreen ? 'postContentSection-smallerScreen' : ''} ${variantType == 'presentation' ? 'postContentSection-presentation' : ''}`}>

            <Suspense fallback={null}>
                {inView && <MediaComponent medias={postData.medias}/>}
            </Suspense>

            <div className="postContentSection-description">
                
                {/* deprecated */}
                {/* <div className="postContentSection-text">
                    {postData.postTextParagraphs?.map((postTextParagraph, index)=> (
                        <p key={index}>{postTextParagraph}</p>
                    ))}
                </div> */}
                <PostText textParagraphs={postData.postTextParagraphs} className={variantType === 'presentation' ? 'presentation' : ''} />

                {/* deprecated */}
                {variantType == 'project' && <div className="divider3"></div>}
                
                {/* ##### the point here below is to show up the tags in the presentation section below the text, instead of above. But later when I'll rebuild PostContainer, the tags section will be a whole component perhaps, it's gonna be easier */}
                {variantType == 'presentation' && <PostTopSection postData={postData} variantType={variantType}/>}

                {/* deprecated */}
                {/* {variantType == 'project' && <div className="postContentSection-keyPoints">
                    <p>{postData.postTextKeyPoints?.text}</p>
                    <ul>
                        {postData.postTextKeyPoints?.points.map((keyPoint) =>(
                            <li key={keyPoint.id}>{keyPoint.text}</li>
                        ))}
                    </ul>
                </div>} */}
                <PostKeypoints keypoints={postData.postTextKeyPoints?.points} keypointsTitle={postData.postTextKeyPoints?.text} />

                {/* deprecated */}
                {/* <div className="postContentSection-links">
                    {postData.postsLinks.map((linkItem) => <a 
                        key={linkItem.link} 
                        className="regularLink" 
                        href={linkItem.link} 
                        target={variantType == 'presentation' ? '_self' : '_blank'}>{linkItem.linkName}</a>
                    )}
                </div> */}
                <PostLinks links={postData.postsLinks} linkTarget={variantType == 'presentation' ? '_self' : '_blank'} />

            </div>

        </div>
    )
}

export default PostContentSection