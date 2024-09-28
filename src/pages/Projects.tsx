import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import AnimationWrapper from "../components/AnimationWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"

const postsPromise = fetchWithPromise('./assets/jsons/posts.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'

    appText:AppTextProps['appText']
}

const Projects:React.FC<ProjectsProps> = ({appLanguage, appText}) => {

    const posts:PostsInterfaceWithLanguage[typeof appLanguage] = postsPromise()[appLanguage]

    return (
        <AnimationWrapper>
            <div className="projects">
                <div className="projects-titleSection">
                    <h2>{appText?.title}</h2>
                </div>
                {posts.map(projectData => (
                    <PostContainer
                        key={projectData.id}
                        postData={projectData}
                        className="project"
                    />
                ))}
            </div>
        </AnimationWrapper>
    )
}

export default Projects