import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { ProjectsListInterfaceWithLanguage } from "../interfaces/projectsListInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import AnimationWrapper from "../components/AnimationWrapper"

const projectsListPromise = fetchWithPromise('./assets/jsons/projectsList.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
}

const Projects:React.FC<ProjectsProps & AppTextProps> = ({appLanguage, appText}) => {

    const projectsList:ProjectsListInterfaceWithLanguage[typeof appLanguage] = projectsListPromise()[appLanguage]

    return (
        <AnimationWrapper transitionDuration={.3}>
            <div className="projects">
                <div className="projects-titleSection">
                    <h2>{appText.title}</h2>
                </div>
                {projectsList.map(projectData => (
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