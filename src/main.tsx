import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/index.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<p>error</p>}>
            <Suspense fallback={<p>loading</p>}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    </StrictMode>,
)