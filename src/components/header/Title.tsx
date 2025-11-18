import { Link } from "react-router-dom"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../../utils/responsiveUtils"
import styled from "styled-components"

const StyleContainer = styled.div`
    display: flex;
    cursor: pointer;
    transition:.15s ease-in-out;
    /* white-space: nowrap; */
    word-break: break-all;
    &.title-mobile{
        align-self: center;

        & h1 {
            font-size: 2.5rem;
        }
    }

    @media (hover:hover){
        &:hover{
            transform: scale(1.05) translateX(1.5rem);
        }
    }
    &:active{
        transform: scale(1.07) translateX(1.6rem);
    }

    & h1 {
        font-size: 5rem;
        font-weight: 700;
    }
`

interface TitleProps {
    titleText: AppTextInterface['title']
}

const Title:React.FC<TitleProps> = ({titleText}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <StyleContainer className={`title ${mobileScreen ? 'title-mobile' : ''}`}>
            <Link to='/'><h1>{titleText}</h1></Link>
        </StyleContainer>
    )
}

export default Title