import styled from 'styled-components'

const StyleContainer = styled.div`
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    /* pointer-events: none;
    z-index: 2;
    opacity: 3;
    filter: url(#noise);
    mix-blend-mode: overlay; */
    background: black;
`

const NoiseLayer: React.FC = () => {
    return (
        <>
            <svg>
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>
            <StyleContainer />
        </>
    )
}

export default NoiseLayer