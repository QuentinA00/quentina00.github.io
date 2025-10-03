import PostContainer from "../components/post/PostContainer"
import { TagInterface } from "../interfaces/postsInterfaces"
import PostFilterComponent from "../components/postFilter/PostFilterComponent"
import { useState } from "react"
import { screen_desktop_medium, screen_desktop_small } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../components/AnimationWrapper"
import { slideFromRight } from "../style/animations/animations"
import styled from "styled-components"
import { usePost } from "../contexts/PostContextProvider"

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

        &.projectItems-mediumScreen{
            flex:2;
        }
    }
    
    .postFilter {
        display: flex;
        flex: 1;
    }
`

const Projects = () => {

    // below 1200px screen width
    const isOnDesktopSmallScreen = useMediaQuery({maxWidth:screen_desktop_small})
    // below 1600px screen width
    const isOnDesktopMediumScreen = useMediaQuery({maxWidth:screen_desktop_medium})

    // get the posts from the context
    const {getProjectPosts} = usePost()

    const projectsPosts = getProjectPosts()

    // tags selected in PostFilterComponent
    const [selectedTags, setSelectedTags] = useState<TagInterface['id'][]>([])
    
    const filteredPosts = projectsPosts.filter(post =>
        selectedTags.length === 0 ||
        (post.tagsId?.some(tagId => selectedTags.includes(tagId)) || false)
    )

    return (
        <Style className={`projects ${isOnDesktopSmallScreen ? 'projects-smallerScreen' : ''}`}>
            <div className={`projectItems ${isOnDesktopMediumScreen ? 'projectItems-mediumScreen' : ''}`}>
                {filteredPosts.map(projectData => (
                    <PostContainer
                        key={projectData.id}
                        postData={projectData}
                        variantType='project'
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