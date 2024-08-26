import React from "react"

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
// description : if not given, will use text value
// className : can give the name of the component in which it is, so it will be named as such "buttonWithIcon-componentName"

const ButtonWithIcon:React.FC<ButtonWithImageProps> = ({imageName, text, description, className}) => {

    // path of the assets
    const assetPath = './assets/'

    // defining the classes to apply
    const classesToApply = () => {
        let classes = 'buttonWithIcon'
        if (className) classes += ` buttonWithIcon-${className}`
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
    

    // console.log('-------ButtonWithImage',imageName,text)
    
    return (
        <div className={classesToApply()} title={description ? description : text}>
            {imageName && <img src={`${pathToApply()}${imageName}`} alt={`${description ? description : text}`}/>}
            {text && <p>{text}</p>}
        </div>
    )
}

export default ButtonWithIcon