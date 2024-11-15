import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"
import PostFilterComponent from "../components/post/PostFilterComponent"

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

    return (
        <div className="projects">
            {projectsPosts.map(projectData => (
                <PostContainer
                    key={projectData.id}
                    postData={projectData}
                    className="project"
                />
            ))}
            <PostFilterComponent/>
        </div>
    )
}

export default Projects