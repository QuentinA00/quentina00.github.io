import ReactPlayer from "react-player"
import { ProjectsMediasInterface } from "../interfaces/projectsListInterfaces"

interface MediaComponentProps {
    mediaData: ProjectsMediasInterface
}

const MediaComponent:React.FC<MediaComponentProps> = ({mediaData}) => {
    return (
        <div className="mediaComponent">
            {mediaData.id === 'image' && <img src={mediaData.linkPath} alt={mediaData.text} />}
            {mediaData.id === 'video' && <ReactPlayer url={mediaData.linkPath} controls width='50%' height='50%'/>}
            <p>{mediaData.text}</p>
        </div>
    )
}

export default MediaComponent