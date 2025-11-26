import styled from 'styled-components'

const StyleContainer = styled.svg`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.03; /* Adjust for subtlety */
    filter: url(#noise);
    mix-blend-mode: overlay;
`

type NoiseLayerProps = {

}

const NoiseLayer: React.FC<NoiseLayerProps> = ({ }) => {
    return (
        <StyleContainer style={{ position: 'fixed', width: 0, height: 0 }}>
            <filter id="noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="4"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>
        </StyleContainer>
    )
}

export default NoiseLayer