import ReactPlayer from "react-player"
import { PostsMediasInterface } from "../interfaces/postsInterfaces"
import { screen_tinyMobile } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"

interface MediaComponentProps {
    mediaData: PostsMediasInterface
}

const MediaComponent:React.FC<MediaComponentProps> = ({mediaData}) => {

    const isOnTinyMobileScreen = useMediaQuery({maxWidth:screen_tinyMobile})

    return (
        <div className="mediaComponent">
            {mediaData.id === 'image' && <img src={mediaData.linkPath} alt={mediaData.text} />}
            {/* {mediaData.id === 'video' && <ReactPlayer url={mediaData.linkPath} controls width='100%' height='100%'/>} */}
            {mediaData.id === 'video' && <ReactPlayer url={mediaData.linkPath} controls width={isOnTinyMobileScreen ? '100%' : '20rem'} height='11rem'/>}
            <p className="mediaComponent-comment">{mediaData.text}</p>
        </div>
    )
}

export default MediaComponent