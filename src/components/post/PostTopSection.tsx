import { useMediaQuery } from "react-responsive"
import ButtonWithIcon from "../ButtonWithIcon"
import Tag from "./Tag"
import { screen_mobile } from "../../utils/responsiveUtils"
import { PostInterface, PostsInterface } from "../../interfaces/postsInterfaces"

interface PostTopSectionProps {
    postData: PostInterface
}

const PostTopSection:React.FC<PostTopSectionProps> = ({postData}) => {

    // whether the post is from professional or personal account
    const isPersonal = postData.projectOrigin?.includes('Personal')

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`postTopSection ${mobileScreen ? 'postTopSection-mobile' : ''}`}>

            {postData.projectOrigin && <ButtonWithIcon text={postData.projectOrigin} imageName={isPersonal ? 'logo_qvsp.png' : 'logo_q.png'}/>}
            
            {postData.title && <div className="postSectionTop-title">
                <h3>{postData.title}</h3>
                <p>•</p>
                <p>{postData.description}</p>
            </div>}
            
            {postData.tags && <div className="postTopSection-tags">
                {postData.tags.map((tagElement) => <Tag key={tagElement.id} text={tagElement.text} className="projects"/>)}
            </div>}

        </div>
    )
}

export default PostTopSection