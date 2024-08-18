import { ProjectsInterface } from "../interfaces/projectsListInterfaces"
import MediaComponent from "./MediaComponent"

interface PostContainerProps {
    title?:string
    description?:string
    medias?:ProjectsInterface['medias']
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({title, description, medias, className}) => {
    return (
        <div className={`postContainer postContainer-${className}`}>
            <h3>{title}</h3>
            <div className="postContainer-items">
                <div className="postContainer-medias">
                    {medias?.map((mediaElement) => {
                        switch (mediaElement.id) {
                            case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                            case 'image': return <MediaComponent 
                                    key={mediaElement.id} 
                                    type={mediaElement.id} 
                                    text={mediaElement.text} 
                                    linkPath={mediaElement.linkPath}
                                />
                            case 'video': return <MediaComponent 
                                    key={mediaElement.id} 
                                    type={mediaElement.id} 
                                    text={mediaElement.text} 
                                    linkPath={mediaElement.linkPath}
                                />
                            default: return null
                        }
                    })}    
                </div>
                <p>{description}</p>
            </div>
            <div className="postContainer-border"></div>
        </div>
    )
}

export default PostContainer