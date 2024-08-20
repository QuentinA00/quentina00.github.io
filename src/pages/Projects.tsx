import PostContainer from "../components/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { ProjectsListInterfaceWithLanguage } from "../interfaces/projectsListInterfaces"
import { pageTransitionIn, slideInOut, slideWithStagger } from "../style/animations/animations"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { motion } from 'framer-motion'

const projectsListPromise = fetchWithPromise('./assets/jsons/projectsList.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
}

const Projects:React.FC<ProjectsProps & AppTextProps> = ({appLanguage, appText}) => {

    const projectsList:ProjectsListInterfaceWithLanguage[typeof appLanguage] = projectsListPromise()[appLanguage]

    return (
        <motion.div
            variants={slideWithStagger}
            initial='initial'
            animate='animate'
            exit='exit'
        >
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
        </motion.div>
    )
}

export default Projects