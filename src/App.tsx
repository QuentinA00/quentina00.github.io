import { Suspense } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import { ErrorBoundary } from "react-error-boundary"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/bottomSection/Footer"
import PageComponent from "./pages/PageComponent"
import FallbackError from "./components/fallbackComponents/FallbackError"
import FallbackLoading from "./components/fallbackComponents/FallbackLoading"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "./utils/responsiveUtils"
import { useLanguage } from "./contexts/LanguageContextProvider"

const App = () => {

    // get text from the context provider
    const {appText} = useLanguage()

    // getting the location datas in the app
    const location = useLocation()

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`app ${isOnMobileScreen ? 'app-mobile' : ''}`}>
            
            <Header/>
            
            <AnimatePresence mode='wait'>

                <Routes location={location} key={location.pathname}>

                    {appText.pages.map((pageItem) => (
                        <Route 
                            key={pageItem.id} 
                            path={pageItem.id} 
                            element={
                                <ErrorBoundary fallback={<FallbackError/>}>
                                    <Suspense fallback={<FallbackLoading/>}>
                                        <PageComponent pageItem={pageItem}/>
                                    </Suspense>
                                </ErrorBoundary>
                            }
                        />
                    ))}

                    {/* in case of a mistype in the url, this route below will redirect to the root / */}
                    <Route path="*" element={<Navigate to="/" replace />}/>

                </Routes>
            </AnimatePresence>

            <Footer/>
        </div>
    )
}

export default App