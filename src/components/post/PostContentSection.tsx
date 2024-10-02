import { useMediaQuery } from "react-responsive"
import { screen_tablet } from "../../utils/responsiveUtils"
import MediaComponent from "../MediaComponent"
import { PostInterface } from "../../interfaces/postsInterfaces"

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