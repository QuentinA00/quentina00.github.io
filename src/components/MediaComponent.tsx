import ReactPlayer from "react-player"
import { PostInterface, PostMediasInterface } from "../interfaces/postsInterfaces"
import { screen_tablet } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import ImageWrapper from "./ImageWrapper"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem;
    border-radius: .7rem;
    align-self: start;
    max-width: 22rem;
    
    & .mediaComponent-imageSection{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-self: center;
        
        & img{
            border-radius: .8rem;
            width: 5rem;
            cursor:pointer;
            border:solid .15rem var(--color3);
            padding: .2rem;
            transition: .15s ease-in-out 0s;

            @media (hover:hover){
                &:hover{
                    filter: brightness(.7);
                }
            }
            &:active{
                transform: scale(.97);
            }
        }
    }
    & .mediaComponent-videoSection{

        & .mediaComponent-video{

            & p{
                color: var(--color2);
                font-style: italic;
                font-size: .8rem;
                text-align: center;
            }
        }
    }

    &.mediaComponent-smallScreen{
        align-self: center;
    }
`

interface MediaComponentProps {
    medias: PostInterface['medias']
}

const MediaComponent:React.FC<MediaComponentProps> = ({medias}) => {

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
        <Container className={`mediaComponent ${smallScreen ? 'mediaComponent-smallScreen' : ''}`}>
            
            {medias?.videos && 
                <div className="mediaComponent-videoSection">
                    { medias.videos.map((video) => (
                        <div key={video.id} className="mediaComponent-video">
                            <ReactPlayer url={video.linkPath} controls width='100%' height='12rem'/>
                            <p className="mediaComponent-comment">{video.text}</p>
                        </div>
                    ))}
                </div>
            }

            {medias?.videos && <div className="divider3"></div>}
            
            {medias?.images && 
                <div className="mediaComponent-imageSection">
                    {medias.images.map((image) => (
                        <img key={image.id} src={image.linkPath} alt={image.text} onClick={() => openImageWrapper(image)}/>
                    ))}
                </div>
            }
            
            <AnimatePresence mode='wait'>
                {selectedImage && <ImageWrapper key='imageWrapper' pathHdImage={selectedImage.linkPathHd} imageDescription={selectedImage.text} closingImageWrapper={closingImageWrapper}/>}
            </AnimatePresence>

        </Container>
    )
}

export default MediaComponent