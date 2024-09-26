import { ProjectsTagsInterface } from "../../interfaces/projectsListInterfaces"

interface TagProps {
    text:ProjectsTagsInterface['text']
    className?:string
}

const Tag:React.FC<TagProps> = ({text, className}) => {
    return (
        <div className={`tag tag-${className}`}>
            <p>{text}</p>
        </div>
    )
}

export default Tag