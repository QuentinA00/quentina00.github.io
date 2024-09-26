import { ProjectsInterface } from "../../interfaces/projectsListInterfaces"
import MediaComponent from "../MediaComponent"
import Tag from "./Tag"

interface PostContainerProps {
    projectData: ProjectsInterface
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({ className, projectData}) => {

    // whether the post is from professional or personal account
    const isPersonal = projectData.projectOrigin.includes('personal')

    return (
        <div className={`postContainer postContainer-${className}`}>
            <div className="postContainer-originSection">
                <img src={isPersonal ? '' : ''} alt={isPersonal ? 'personal' : 'professional'} />
                <p>{projectData.projectOrigin}</p>
            </div>
            <h3>{projectData.title} • {projectData.description}</h3>
            {projectData.tags?.map((tagElement) => (
                <Tag key={tagElement.id} text={tagElement.text}/>
            ))}
            <div className="postContainer-items">
                <div className="postContainer-medias">
                    {projectData.medias?.map((mediaElement) => {
                        switch (mediaElement.id) {
                            case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                            case 'image': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                            case 'video': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                            default: return null
                        }
                    })}
                </div>
                <p>{projectData.postText}</p>
            </div>
            <div className="postContainer-border"></div>
        </div>
    )
}

export default PostContainer