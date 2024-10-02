import { useEffect } from "react"
import { PostMediasInterface } from "../interfaces/postsInterfaces"
import ButtonWithIcon from "./ButtonWithIcon"
import ReactDOM from 'react-dom'
import AnimationWrapper from "./AnimationWrapper"
import { bounce } from "../style/animations/animations"

interface ImageWrapperProps {
    pathHdImage:PostMediasInterface['linkPathHd']
    imageDescription:PostMediasInterface['text']
    closingImageWrapper:()=>void
}

const ImageWrapper:React.FC<ImageWrapperProps> = ({pathHdImage, imageDescription, closingImageWrapper}) => {

    // listening if the escape key is pressed when imageWrapper is loaded
    useEffect(() => {

        // if it receive an escape key from the listener, it will execute the function closingImageWrapper, sent as a prop
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closingImageWrapper()
        }
        
        // send all the keys listen to handleEscapeKey
        document.addEventListener('keydown', handleEscapeKey)
        
        // remove the event listener when not needed
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [closingImageWrapper])

    // Disable scroll on mount, enable scroll on unmount
    useEffect(() => {
        // Disable scrolling by adding overflow: hidden to body
        document.body.style.overflow = 'hidden'

        // Cleanup function to enable scrolling again when modal closes
        return () => {
            document.body.style.overflow = '' // Revert back to normal scrolling
        }
    }, [])

    return ReactDOM.createPortal(
        <AnimationWrapper transitionDuration={.3} className="imageWrapper" animationType={bounce}>
            <div className="imageWrapper-background" onClick={closingImageWrapper}></div>
            <div className="imageWrapper-closingButton" onClick={closingImageWrapper}>
                <ButtonWithIcon imageName="close.svg"/>
            </div>
            <div className="imageWrapper-items">
                <img src={pathHdImage} alt={imageDescription} />
                <p>{imageDescription}</p>
            </div>
        </AnimationWrapper>,
        document.body
    )
}

export default ImageWrapper