// import { ErrorBoundary } from "react-error-boundary"
import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { ProjectsListInterfaceWithLanguage } from "../interfaces/projectsListInterfaces"
// import {  slideInOut, slideWithStagger } from "../style/animations/animations"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
// import { motion } from 'framer-motion'
// import { Suspense } from "react"
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
                {/* <h2 className="projects-titleSection sectionBorder">{appText.title}</h2> */}
                <div className="projects-titleSection sectionBorder">
                    {/* <div className="projects-border"></div> */}
                    <h2>{appText.title}</h2>
                </div>
                {projectsList.map(projectData => (
                    <PostContainer
                        key={projectData.id}
                        projectData={projectData}
                        className="projects"
                    />
                ))}
            </div>
        </AnimationWrapper>
    )
}

export default Projects