import { useMediaQuery } from "react-responsive"
import { screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
// import PostTopSection from "./PostTopSection"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import { lazy, Suspense, useRef } from "react"
import { useInView } from "framer-motion"
import PostText from "./elements/PostText"
import PostKeypoints from "./elements/PostKeypoints"
import PostLinks from "./elements/PostLinks"

interface PostContentSectionProps {
    postData: PostInterface
}

const MediaComponent = lazy(() => import("./elements/PostMedias"))

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
                
                <PostText textParagraphs={postData.postTextParagraphs} className={variantType === 'presentation' ? 'presentation' : ''} />

                {variantType == 'project' && <div className="divider3"></div>}
                
                {/* ##### the point here below is to show up the tags in the presentation section below the text, instead of above. But later when I'll rebuild PostContainer, the tags section will be a whole component perhaps, it's gonna be easier */}
                {variantType == 'presentation' && <PostTopSection postData={postData} variantType={variantType}/>}

                <PostKeypoints keypoints={postData.postTextKeyPoints?.points} keypointsTitle={postData.postTextKeyPoints?.text} />

                <PostLinks links={postData.postsLinks} linkTarget={variantType == 'presentation' ? '_self' : '_blank'} />

            </div>

        </div>
    )
}

export default PostContentSection