import { TagInterface } from "../interfaces/postsInterfaces"
import { useMemo, useState } from "react"
import { screen_desktop_medium, screen_desktop_small } from "../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import { AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { usePost } from "../contexts/PostContextProvider"
import Post from "../components/post/Post"
import PostFilter from "../components/postFilter/PostFilter"

const StyleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    @include transition(.1s);

    &.projects-smallerScreen{
        flex-direction: column-reverse;
    }

    & .projectItems{
        display: flex;
        flex-direction: column;
        row-gap: 3rem;
        flex: 2.5;

        &.projectItems-mediumScreen{
            flex:2;
        }
    }

    /* > * {
        content-visibility:auto;
        contain-intrinsic-size:40rem;
    } */
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

    // filtering posts
    const filteredPosts = useMemo(() => {
        return projectsPosts.filter(post => 
            selectedTags.length === 0 ||
            (post.tagsId?.some(tagId => selectedTags.includes(tagId)) || false)
        )
    },[projectsPosts,selectedTags])

    return (
        <StyleContainer className={`projects ${isOnDesktopSmallScreen ? 'projects-smallerScreen' : ''}`}>
            
            <div className={`projectItems ${isOnDesktopMediumScreen ? 'projectItems-mediumScreen' : ''}`}>
                <AnimatePresence mode='sync'>
                    {filteredPosts.map(projectData => (
                        <Post
                            key={projectData.id}
                            postData={projectData}
                            variantType='project'
                        />
                    ))}
                </AnimatePresence>
            </div>

            <PostFilter projectPosts={projectsPosts} setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>
        </StyleContainer>
    )
}

export default Projects