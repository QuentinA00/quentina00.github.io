import { ErrorBoundary } from "react-error-boundary"
import PostContainer from "../components/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { ProjectsListInterfaceWithLanguage } from "../interfaces/projectsListInterfaces"
import {  slideInOut, slideWithStagger } from "../style/animations/animations"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { motion } from 'framer-motion'
import { Suspense } from "react"
import AnimationWrapper from "../components/AnimationWrapper"

const projectsListPromise = fetchWithPromise('./assets/jsons/projectsList.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
}

const Projects:React.FC<ProjectsProps & AppTextProps> = ({appLanguage, appText}) => {

    const projectsList:ProjectsListInterfaceWithLanguage[typeof appLanguage] = projectsListPromise()[appLanguage]

    return (
        <AnimationWrapper>
            <div className="projects">
                <div className="projects-titleSection">
                    <div className="projects-border"></div>
                    <h2>{appText.title}</h2>
                </div>
                <ErrorBoundary fallback={<p>error</p>}>
                    <Suspense fallback={<p>loading</p>}>
                        {projectsList.map(element => (
                            <PostContainer
                                key={element.id}
                                title={element.title}
                                medias={element.medias}
                                description={element.description}
                                className="projects"
                            />
                        ))}
                    </Suspense>
                </ErrorBoundary>
            </div>
        </AnimationWrapper>
    )
}

export default Projects