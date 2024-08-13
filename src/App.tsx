import { ErrorBoundary } from "react-error-boundary"
import Home from "./pages/Home"
import { Suspense, useState } from "react"

const App = () => {

    // follow state of the selected language in the application. English by default
    const [appLanguage, setAppLanguage] = useState<'en'|'fr'>('en')

    return (
        <div className="app">
            <ErrorBoundary fallback={<p>error</p>}>
                <Suspense fallback={<p>loading</p>}>
                    <Home appLanguage={appLanguage} />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App