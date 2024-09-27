import { useMediaQuery } from "react-responsive"
import { ProjectsInterface } from "../../interfaces/projectsListInterfaces"
import { screen_mobile } from "../../utils/responsiveUtils"
import MediaComponent from "../MediaComponent"

interface PostContentSectionProps {
    postData: ProjectsInterface
}

const PostContentSection:React.FC<PostContentSectionProps> = ({postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`postContentSection ${mobileScreen ? 'postContentSection-mobile' : ''}`}>
            <div className="postContentSection-medias">
                {postData.medias?.map((mediaElement) => {
                    switch (mediaElement.id) {
                        case 'image': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'video': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                        default: return null
                    }
                })}
            </div>

            <div className="postContentSection-text">
                <p>{postData.postText}</p>
                <a className="regularLink">{postData.projectLink}</a>
            </div>
        </div>
    )
}

export default PostContentSection