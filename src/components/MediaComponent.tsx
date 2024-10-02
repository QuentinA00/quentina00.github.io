import ReactPlayer from "react-player"
import { PostInterface, PostMediasInterface } from "../interfaces/postsInterfaces"
import { screen_tablet } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import ImageWrapper from "./ImageWrapper"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

interface MediaComponentProps {
    mediaData: PostInterface['medias']
}

const MediaComponent:React.FC<MediaComponentProps> = ({mediaData}) => {

    const smallScreen = useMediaQuery({maxWidth:screen_tablet})

    // keeping track of the selected image, in order to show it up in the image wrapper
    const [selectedImage, setSelectedImage] = useState<PostMediasInterface | null>(null);

    const openImageWrapper = (selectedImage:PostMediasInterface):void => {
        setSelectedImage(selectedImage)
    }

    const closingImageWrapper = ():void =>{
        setSelectedImage(null)
    }

    return (
        <div className={`mediaComponent ${smallScreen ? 'mediaComponent-smallScreen' : ''}`}>
            
            <div className="mediaComponent-videoSection">
                {mediaData?.videos && mediaData.videos.map((video) => (
                    <div className="mediaComponent-video">
                        <ReactPlayer key={video.id} url={video.linkPath} controls width='100%' height='12rem'/>
                        <p className="mediaComponent-comment">{video.text}</p>
                    </div>
                ))}
            </div>

            <div className="divider3"></div>
            
            <div className="mediaComponent-imageSection">
                {mediaData?.images && mediaData.images.map((image) => (
                    <img key={image.id} src={image.linkPath} alt={image.text} onClick={() => openImageWrapper(image)}/>
                ))}
            </div>
            
            <AnimatePresence mode='wait'>
                {selectedImage && <ImageWrapper key='imageWrapper' pathHdImage={selectedImage.linkPathHd} imageDescription={selectedImage.text} closingImageWrapper={closingImageWrapper}/>}
            </AnimatePresence>

        </div>
    )
}

export default MediaComponent