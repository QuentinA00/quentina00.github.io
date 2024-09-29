import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/index.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import FallbackError from './components/fallbackComponents/FallbackError.tsx'
import FallbackLoading from './components/fallbackComponents/FallbackLoading.tsx'
// import { AnimatePresence } from 'framer-motion'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<FallbackError/>}>
            <Suspense fallback={<FallbackLoading/>}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    </StrictMode>,
)