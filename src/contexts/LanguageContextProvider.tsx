import { createContext, FC, ReactNode, useContext, useState } from "react"
import { AppTextInterface, AppTextInterfacesWithLanguage } from "../interfaces/appTextInterfaces"
import appText from '../../public/assets/jsons/appText.json'

interface LanguageContextType {
    currentLanguage: 'en' | 'fr'
    setLanguage: (language: 'en' | 'fr') => void
    appText: AppTextInterface
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: FC<{children : ReactNode}> = ({children}) => {
    const [currentLanguage,setCurrentLanguage] = useState<'en'|'fr'>('en')

    const setLanguage = (language:'en'|'fr') => {
        setCurrentLanguage(language)
    }

    const appTextData = appText as AppTextInterfacesWithLanguage
    const currentAppText = appTextData[currentLanguage]

    return (
        <LanguageContext.Provider value={{currentLanguage,setLanguage,appText:currentAppText}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}