import styled from "styled-components"
import { PostKeyPointsInterface } from "../../interfaces/postsInterfaces"
import { FC } from "react"

interface PostKeypointsProps {
    keypointsTitle?: string
    keypoints?: PostKeyPointsInterface[]
}

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    font-weight: 400;
`

const PostKeypoints: FC<PostKeypointsProps> = ({keypoints,keypointsTitle}) => {
    if (!keypoints || keypoints.length === 0) return null
    return (
        <StyleContainer>
            <p>{keypointsTitle}</p>
            <ul>
                {keypoints?.map((keyPoint) => (
                    <li key={keyPoint.id}>{keyPoint.text}</li>
                ))}
            </ul>
        </StyleContainer>
    )
}

export default PostKeypoints