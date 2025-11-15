import styled from "styled-components"
import { usePost } from "../contexts/PostContextProvider"
import Post from "../components/post/Post"

const HomeStyle = styled.div`
    display: flex;
    transition: ease-in-out .2s;
`

const Home = () => {

    // get post(s) from context provider
    const {getPresentationPost} = usePost()
    const presentationPosts = getPresentationPost()

    return (
        <HomeStyle className="home">
            {presentationPosts.map((presentationPost) => <Post key={presentationPost.id} postData={presentationPost} variantType='presentation'/>)}
        </HomeStyle>
    )
}

export default Home