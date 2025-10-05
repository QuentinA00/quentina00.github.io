import styled from 'styled-components'
import ButtonWithIcon from '../ButtonWithIcon'

const Container = styled.div`
    display:flex;

    & .buttonWithIcon {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        background: var(--color3);
        align-self: flex-start;
        padding: .2rem 1.5rem;
        border-radius: 3rem;
        padding-left: .3rem;

        & img {
            width: 1.2rem;
            border-radius: 5rem;
            filter: invert(0) !important;
        }
        & p {
            font-size: .8rem;
            font-weight: 300;
        }
    }
`

type PostOriginProps = {
    postOrigin?: string
}

const PostOrigin: React.FC<PostOriginProps> = ({postOrigin}) => {

    if (!postOrigin) return null

    const isPersonal = postOrigin.toLowerCase().includes('personal')
    const imageName = isPersonal ? 'logo_qvsp_small.jpeg' : 'logo_q_small.jpeg'

    return (
        <Container>
            <ButtonWithIcon text={postOrigin} imageName={imageName} />
        </Container>
    )
}

export default PostOrigin