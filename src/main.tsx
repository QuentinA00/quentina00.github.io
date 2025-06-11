import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/index.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import FallbackError from './components/fallbackComponents/FallbackError.tsx'
import FallbackLoading from './components/fallbackComponents/FallbackLoading.tsx'
import { PostsContextProvider } from './contexts/PostsContextProvider.tsx'
import { SlidingMenuProvider } from './contexts/SlidingMenuContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<FallbackError/>}>
            <Suspense fallback={<FallbackLoading/>}>
                <HashRouter>
                    <PostsContextProvider>
                        <SlidingMenuProvider>
                        <App />
                        </SlidingMenuProvider>
                    </PostsContextProvider>
                </HashRouter>
            </Suspense>
        </ErrorBoundary>
    </StrictMode>,
)