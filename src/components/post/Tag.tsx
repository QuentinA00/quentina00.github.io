import { ProjectsTagsInterface } from "../../interfaces/postsInterfaces"

interface TagProps {
    text:ProjectsTagsInterface['text']
    className?:string
}

const Tag:React.FC<TagProps> = ({text, className}) => {
    return (
        <div className={`tag tag-${className}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle1" cx="9" cy="9" r="4" fill="#F1F1F1"/>
                <circle className="circle2" cx="9" cy="9" r="8.15" stroke="#F1F1F1" stroke-width="1.7"/>
            </svg>
            <p>{text}</p>
        </div>
    )
}

export default Tag