import { useMediaQuery } from "react-responsive"
import { ProjectsInterface } from "../../interfaces/projectsListInterfaces"
// import MediaComponent from "../MediaComponent"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile } from "../../utils/responsiveUtils"
// import Tag from "./Tag"

interface PostContainerProps {
    postData: ProjectsInterface
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({ className, postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`postContainer postContainer-${className} ${mobileScreen ? 'postContainer-mobile' : ''}`}>
            
            <PostTopSection postData={postData}/>

            <PostContentSection postData={postData}/>

            {/* <div className="postContainer-originSection">
                <img src={isPersonal ? '' : ''} alt={isPersonal ? 'personal project' : 'professional project'} />
                <p>{postData.projectOrigin}</p>
            </div>
            
            <h3>{postData.title} • {postData.description}</h3> */}
            
            {/* tags */}
            {/* <div className="postContainer-tags">
                {postData.tags?.map((tagElement) => <Tag key={tagElement.id} text={tagElement.text} className="projects"/>)}
            </div>
            
            <div className="postContainer-items">
                <div className="postContainer-medias">
                    {postData.medias?.map((mediaElement) => {
                        switch (mediaElement.id) {
                            case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                            case 'image': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                            case 'video': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                            default: return null
                        }
                    })}
                </div>

                <p>{postData.postText}</p>

            </div> */}

            {/* <div className="postContainer-border"></div> */}

        </div>
    )
}

export default PostContainer