import { RefObject, useEffect } from "react"

interface UseCloseMenuProps{
    openingState: boolean
    closing: () => void
    ref: RefObject<HTMLDivElement>
}

export const useCloseMenu = ({openingState, closing, ref}:UseCloseMenuProps) => {
    
    // handle escape key press
    useEffect(() => {
        if (!openingState) return

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closing()
        }

        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [openingState, closing])

    // handle click outside the ref
    useEffect(() => {
        if (!openingState) return

        const handleClickOutside = (event:MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                closing()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [openingState,closing,ref])
}