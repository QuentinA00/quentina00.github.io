import React, { createContext, useContext, ReactNode } from 'react'
import { fetchWithPromise } from '../utils/api/promiseWrapper'
import { AppTextInterfacesWithLanguage } from '../interfaces/appTextInterfaces'

interface AppTextContextType {
    appText: AppTextInterfacesWithLanguage[keyof AppTextInterfacesWithLanguage]
    appLanguage: 'en' | 'fr'
}

const AppTextContext = createContext<AppTextContextType | undefined>(undefined)

interface AppTextProviderProps {
    children: ReactNode
    appLanguage: 'en' | 'fr'
}

// Initialize the promise outside the component to ensure it is created only once
const appTextPromise = fetchWithPromise('./assets/jsons/appText.json')

export const AppTextProvider: React.FC<AppTextProviderProps> = ({ children, appLanguage }) => {
    // Get the app text data and index by language
    const allAppText: AppTextInterfacesWithLanguage = appTextPromise()
    const appText = allAppText[appLanguage]

    const contextValue: AppTextContextType = { appText, appLanguage }

    return (
        <AppTextContext.Provider value={contextValue}>
            {children}
        </AppTextContext.Provider>
    )
}

export const useAppText = (): AppTextContextType => {
    const context = useContext(AppTextContext)
    if (!context) {
        throw new Error('useAppText must be used within an AppTextProvider')
    }
    return context
} 