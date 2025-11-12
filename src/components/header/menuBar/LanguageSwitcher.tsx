import styled from 'styled-components'
import { useLanguage } from '../../../contexts/LanguageContextProvider'
import { motion } from 'framer-motion'
import { zoomEffect4 } from '../../../style/animations/animations'

// here, StyleContainer is a Framer "motion.div", not a simple div
const StyleContainer = styled(motion.div)`
    display:flex;
    flex-direction:column;
    row-gap:.5rem;
    position:absolute;
    transform:translate(-50%,2.5rem);
    left:50%;
    background:var(--color3);
    padding:1rem;
    border-radius:.5rem;
    border: solid .1rem var(--color3);
    backdrop-filter:blur(1rem);
    box-shadow:0rem 0rem 1.5rem var(--color3);
    
    & .languageItem{
        padding:.15rem 1rem;
        border-radius:.3rem;
        cursor:pointer;
        transition:ease-in-out .1s;
        font-size:.85rem;
        
        &:hover{
            background:var(--color3);
            filter:brightness(.9);
        }
        &:active{
            scale:.97;
        }
    }
    & .languageItem-selected{
        color:var(--color1);
        background:var(--color2);

        &:hover{
            background:var(--color2);
        }
    }
`

const LanguageSwitcher = () => {

    const {setLanguage, currentLanguage} = useLanguage()

    const languagesItems = [
        { languageCode: 'en' as const, label: 'English' },
        { languageCode: 'fr' as const, label: 'Français' }
    ]

    const handleLanguageChange = (language: 'en'| 'fr') => setLanguage(language)

    return (
        <StyleContainer 
            variants={zoomEffect4}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration:.15,
                ease:'easeInOut'
            }}
        >
            {languagesItems.map(language => (
                <div 
                    key={language.languageCode} 
                    className={`languageItem ${language.languageCode === currentLanguage ? 'languageItem-selected' : ''}`}
                    onClick={() => handleLanguageChange(language.languageCode)}
                >
                    {language.label}
                </div>
            ))}
        </StyleContainer>
    )
}

export default LanguageSwitcher