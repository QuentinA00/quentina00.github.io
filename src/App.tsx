import { Suspense, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import { fetchWithPromise } from "./utils/api/promiseWrapper"
import { AppTextInterfacesWithLanguage } from "./interfaces/appTextInterfaces"
import { ErrorBoundary } from "react-error-boundary"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/bottomSection/Footer"
import PageComponent from "./pages/PageComponent"
import FallbackError from "./components/fallbackComponents/FallbackError"
import FallbackLoading from "./components/fallbackComponents/FallbackLoading"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "./utils/responsiveUtils"

// Initialize the promise outside the component to ensure it is created only once
// This avoids multiple fetches
// will works well with React Suspense
// returns a function, not the actual data btw that's why the returned function has to be called below, in the component.
const appTextPromise = fetchWithPromise('./assets/jsons/appText.json')

const App = () => {

    // follow state of the selected language in the application. English by default
    const [appLanguage, setAppLanguage] = useState<'en'|'fr'>('en')

    // using appTextPromise function that returns the data, and index the data depending on the app language
    const appText:AppTextInterfacesWithLanguage[typeof appLanguage] = appTextPromise()[appLanguage]

    // getting the location datas in the app
    const location = useLocation()

    // console.log(location.pathname)

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`app ${isOnMobileScreen ? 'app-mobile' : ''}`}>
            
            <Header appText={appText}/>
            
            <AnimatePresence mode='wait'>

                <Routes location={location} key={location.pathname}>

                    {appText.pages.map((pageItem) => (
                        <Route 
                            key={pageItem.id} 
                            path={pageItem.id} 
                            element={
                                <ErrorBoundary fallback={<FallbackError/>}>
                                    <Suspense fallback={<FallbackLoading/>}>
                                        <PageComponent pageItem={pageItem} appLanguage={appLanguage} appText={appText} setAppLanguage={setAppLanguage}/>
                                    </Suspense>
                                </ErrorBoundary>
                            }
                        />
                    ))}


                </Routes>
            </AnimatePresence>

            <Footer footerText={appText.bottomSection} />
        </div>
    )
}

export default App