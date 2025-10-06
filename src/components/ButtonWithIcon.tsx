import React from "react"
import { screen_mobile } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"

export interface ButtonWithImageProps {
    text?: string
    imageName?: string
    className?:string
    description?:string
}

////////////////////////////////////////////
// Guide Props
////////////////////////////////////////////
// imageName : give full name of file. Exemple : image1.png
// text : 
// description : if given, will show up a span element containing the description text
// className : can give the name of the component in which it is, so it will be named as such "buttonWithIcon-componentName"

const ButtonWithIcon:React.FC<ButtonWithImageProps> = ({imageName, text, description, className}) => {

    // path of the assets
    const assetPath = './assets/'

    // just to simplify the code, checking whether or not the description is given
    const descriptionText = description ? description : text

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    // defining the classes to apply
    const classesToApply = () => {
        let classes = 'buttonWithIcon'
        if (className) classes += ` ${className}`
        return classes
    }

    // determining which path to give to the assets depending on whether it is an icon (svg) or image (other formats)
    const pathToApply = () => {
        let path = assetPath

        if (imageName) {
            if (imageName.includes('svg')) path += 'icons/'
            else path += 'imgs/'
        }

        return path
    }
    
    // console.log('-------ButtonWithImage',imageName,text, descriptionText)
    
    return (
        <div className={classesToApply()} style={{display:'flex'}}>
            {imageName && <img src={`${pathToApply()}${imageName}`} alt={descriptionText} decoding="async" loading="lazy"/>}
            {text && <p>{text}</p>}
            {description && !isOnMobileScreen && <span>{description}</span>}
        </div>
    )
}

export default ButtonWithIcon