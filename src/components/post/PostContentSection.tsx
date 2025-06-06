import { useMediaQuery } from "react-responsive"
import { screen_tablet } from "../../utils/responsiveUtils"
import MediaComponent from "../MediaComponent"
import { PostInterface } from "../../interfaces/postsInterfaces"
import PostTopSection from "./PostTopSection"

interface PostContentSectionProps {
    postData: PostInterface
}

const PostContentSection:React.FC<PostContentSectionProps> = ({postData}) => {

    const smallerScreen = useMediaQuery({maxWidth:screen_tablet})

    return (
        <div className={`postContentSection ${smallerScreen ? 'postContentSection-smallerScreen' : ''}`}>

            {postData.medias && <MediaComponent mediaData={postData.medias}/>}

            <div className="postContentSection-description">
                <div className="postContentSection-text">
                    {postData.postTextParagraphs?.map((postTextParagraph, index)=> (
                        <p key={index}>{postTextParagraph}</p>
                    ))}
                </div>

                {postData.id != 'presentation' && <div className="divider3"></div>}
                
                {/* ##### the point here below is to show up the tags in the presentation section below the text, instead of above. But later when I'll rebuild PostContainer, the tags section will be a whole component perhaps, it's gonna be easier */}
                {postData.id == 'presentation' && <PostTopSection postData={postData} />}

                <div className="postContentSection-keyPoints">
                    <p>{postData.postTextKeyPoints?.text}</p>
                    <ul>
                        {postData.postTextKeyPoints?.points.map((keyPoint) =>(
                            <li key={keyPoint.id}>{keyPoint.text}</li>
                        ))}
                    </ul>
                </div>
                <div className="postContentSection-links">
                    {postData.postsLinks.map((linkItem) => <a 
                        key={linkItem.link} 
                        className="regularLink" 
                        href={linkItem.link} 
                        target={postData.id == 'presentation' ? '_self' : '_blank'}>{linkItem.linkName}</a>
                    )}
                </div>
            </div>

        </div>
    )
}

export default PostContentSection