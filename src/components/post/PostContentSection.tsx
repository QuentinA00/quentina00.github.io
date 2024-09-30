import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../../utils/responsiveUtils"
import MediaComponent from "../MediaComponent"
import { PostInterface, PostsInterface } from "../../interfaces/postsInterfaces"

interface PostContentSectionProps {
    postData: PostInterface
}

const PostContentSection:React.FC<PostContentSectionProps> = ({postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`postContentSection ${mobileScreen ? 'postContentSection-mobile' : ''}`}>
            
            {postData.medias && <div className="postContentSection-medias">
                {postData.medias.map((mediaElement) => {
                    switch (mediaElement.id) {
                        case 'image': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'video': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                        default: return null
                    }
                })}
            </div>}

            <div className="postContentSection-description">
                <div className="postContentSection-text">
                    {postData.postTextParagraphs?.map((postTextParagraph, index)=> (
                        <p key={index}>{postTextParagraph}</p>
                    ))}
                </div>
                <div className="divider2"></div>
                <div className="postContentSection-keyPoints">
                    <p>{postData.postTextKeyPoints?.text}</p>
                    <ul>
                        {postData.postTextKeyPoints?.points.map((keyPoint) =>(
                            <li key={keyPoint.id}>{keyPoint.text}</li>
                        ))}
                    </ul>
                </div>
                <div className="postContentSection-links">
                    {postData.postsLinks.map((linkItem) => <a key={linkItem.link} className="regularLink" href={linkItem.link}>{linkItem.linkName}</a>)}
                </div>
            </div>

        </div>
    )
}

export default PostContentSection