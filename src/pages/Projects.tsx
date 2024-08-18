import PostContainer from "../components/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { ProjectsListInterfaceWithLanguage } from "../interfaces/projectsListInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"

const projectsListPromise = fetchWithPromise('./assets/jsons/projectsList.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
}

const Projects:React.FC<ProjectsProps & AppTextProps> = ({appLanguage, appText}) => {

    const projectsList:ProjectsListInterfaceWithLanguage[typeof appLanguage] = projectsListPromise()[appLanguage]

    return (
        <div className="projects">
            <div className="projects-titleSection">
                <div className="projects-border"></div>
                <h2>{appText.title}</h2>
            </div>
            {projectsList.map(element => (
                <PostContainer
                    key={element.id}
                    title={element.title}
                    medias={element.medias}
                    description={element.description}
                    className="projects"
                />
            ))}
        </div>
    )
}

export default Projects