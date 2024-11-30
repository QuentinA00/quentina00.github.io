import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"
import PostFilterComponent from "../components/post/PostFilterComponent"
import { useState } from "react"
import { screen_desktop } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"

const postsPromise = fetchWithPromise('./assets/jsons/posts.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
    appText:AppTextProps['appText']
}

const Projects:React.FC<ProjectsProps> = ({appLanguage}) => {

    // gather posts data from json, according to the selected language
    const posts:PostsInterfaceWithLanguage[typeof appLanguage] = postsPromise()[appLanguage]

    // gather project element(s) from posts.json
    const projectsPosts = posts.projects

    // tags selected in PostFilterComponent
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const isOnSmallerScreen = useMediaQuery({maxWidth:screen_desktop})

    const filteredPosts = projectsPosts.filter(post =>
        selectedTags.length === 0 ||
        (post.tags?.some(tag => selectedTags.includes(tag.text)) || false)
    )

    return (
        <div className={`projects ${isOnSmallerScreen ? 'projects-smallerScreen' : ''}`}>
            <div className="projectItems">
                {filteredPosts.map(projectData => (
                    <PostContainer
                        key={projectData.id}
                        postData={projectData}
                        className="project"
                    />
                ))}
            </div>
            {<PostFilterComponent projectPosts={projectsPosts} setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>}
        </div>
    )
}

export default Projects