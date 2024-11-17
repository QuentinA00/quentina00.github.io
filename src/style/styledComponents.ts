import styled from "styled-components";

export const basicButtonBehaviour = styled.div`
    transition:ease-in-out .1s;
    cursor:pointer;
    
    &:active{
        transform:scale(.95);
    }
`

export const tagStyle = styled(basicButtonBehaviour)`
    transition:ease-in-out .1s;
    cursor:pointer;
    
    &:active{
        transform:scale(.95);
    }
`