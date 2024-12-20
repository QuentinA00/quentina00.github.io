import PostContainer from "../components/post/PostContainer"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"
import PostFilterComponent from "../components/post/PostFilterComponent"
import { useState } from "react"
import { screen_desktop } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../components/AnimationWrapper"
import { slideFromRight } from "../style/animations/animations"
import styled from "styled-components"

const postsPromise = fetchWithPromise('./assets/jsons/posts.json')

interface ProjectsProps {
    appLanguage:'en'|'fr'
    appText:AppTextProps['appText']
}

const Style = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    @include transition(.1s);

    &.projects-smallerScreen{
        flex-direction: column-reverse;
    }

    .projectItems{
        display: flex;
        flex-direction: column;
        row-gap: 3rem;
        flex: 3;
    }
    
    .postFilter {
        display: flex;
        flex: 1;
    }
`

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
        <Style className={`projects ${isOnSmallerScreen ? 'projects-smallerScreen' : ''}`}>
            <div className="projectItems">
                {filteredPosts.map(projectData => (
                    <PostContainer
                        key={projectData.id}
                        postData={projectData}
                        className="project"
                    />
                ))}
            </div>
            <AnimatePresence mode='wait'>
                <AnimationWrapper className="postFilter" animationType={slideFromRight} transitionDuration={.5}>
                    <PostFilterComponent projectPosts={projectsPosts} setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>
                </AnimationWrapper>
            </AnimatePresence>
        </Style>
    )
}

export default Projects