import ReactPlayer from "react-player"

interface MediaComponentProps {
    linkPath:string
    type:'image'|'video'
    text?:string
}

const MediaComponent:React.FC<MediaComponentProps> = ({linkPath, text, type}) => {
    return (
        <div className="mediaComponent">
            {type === 'image' && <img src={linkPath} alt={text} />}
            {type === 'video' && <ReactPlayer url={linkPath} controls width='50%' height='50%'/>}
            <p>{text}</p>
        </div>
    )
}

export default MediaComponent