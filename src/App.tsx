import { ErrorBoundary } from "react-error-boundary"
import Home from "./pages/Home"
import { Suspense } from "react"

const App = () => {

    return (
        <div className="app">
            <ErrorBoundary fallback={<p>error</p>}>
                <Suspense fallback={<p>loading</p>}>
                    <Home/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App