import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackError from './FallbackError'
import FallbackLoading from './FallbackLoading'

interface ErrorSuspenseWrapperProps {
    children:React.ReactNode
}

const ErrorSuspenseWrapper:React.FC<ErrorSuspenseWrapperProps> = ({children}) => {
    return (
        // <div>
            <ErrorBoundary fallback={<FallbackError/>}>
                <Suspense fallback={<FallbackLoading/>}>
                    {children}
                </Suspense>
            </ErrorBoundary>
        // </div>
    )
}

export default ErrorSuspenseWrapper