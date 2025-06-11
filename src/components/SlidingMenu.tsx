import React, { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface SlidingMenuProps {
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, onClose, children }) => {
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose()
            }
        }

        // Add event listener when menu is open
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
        }

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="slidingMenu-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .25, ease: "easeInOut" }}
                        onClick={onClose}
                    />
                    
                    {/* Menu */}
                    <motion.div
                        className="slidingMenu"
                        initial={{ x: "110%" }}
                        animate={{ x: ["105%", "-5%", "0%"] }}
                        exit={{ x: "110%" }}
                        transition={{ duration: 0.4, ease: "easeInOut", times: [0, 0.7, 1] }}
                    >
                        <div className="slidingMenu-content">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SlidingMenu 