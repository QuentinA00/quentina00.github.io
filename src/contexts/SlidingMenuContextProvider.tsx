import React, { createContext, useContext, useState, ReactNode } from 'react'

interface SlidingMenuContextType {
    isMenuOpen: boolean
    openMenu: () => void
    closeMenu: () => void
    toggleMenu: () => void
}

const SlidingMenuContext = createContext<SlidingMenuContextType | undefined>(undefined)

interface SlidingMenuProviderProps {
    children: ReactNode
}

export const SlidingMenuProvider: React.FC<SlidingMenuProviderProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)
    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    const contextValue: SlidingMenuContextType = {
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu
    }

    return (
        <SlidingMenuContext.Provider value={contextValue}>
            {children}
        </SlidingMenuContext.Provider>
    )
}

export const useSlidingMenu = (): SlidingMenuContextType => {
    const context = useContext(SlidingMenuContext)
    if (!context) {
        throw new Error('useSlidingMenu must be used within a SlidingMenuProvider')
    }
    return context
} 