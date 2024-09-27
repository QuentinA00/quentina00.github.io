import ReactPlayer from "react-player"
import { ProjectsMediasInterface } from "../interfaces/projectsListInterfaces"

interface MediaComponentProps {
    mediaData: ProjectsMediasInterface
}

const MediaComponent:React.FC<MediaComponentProps> = ({mediaData}) => {
    return (
        <div className="mediaComponent">
            {mediaData.id === 'image' && <img src={mediaData.linkPath} alt={mediaData.text} />}
            {mediaData.id === 'video' && <ReactPlayer url={mediaData.linkPath} controls width='100%' height='100%'/>}
            <p className="mediaComponent-comment">{mediaData.text}</p>
        </div>
    )
}

export default MediaComponent