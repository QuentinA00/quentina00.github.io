import Header from "../components/header/Header"
import { AppTextInterfacesWithLanguage } from "../interfaces/appTextInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"

// Initialize the promise outside the component to ensure it is created only once
// This avoids multiple fetches
// will works well with React Suspense
// returns a function, not the actual data btw that's why the returned function has to be called below, in the component.
const appTextPromise = fetchWithPromise('./assets/jsons/appText.json')

interface HomeProps {
    appLanguage: 'fr' | 'en'
}

const Home:React.FC<HomeProps> = ({appLanguage}) => {

    // using appTextPromise function that returns the data, and index the data depending on the app language
    const appText:AppTextInterfacesWithLanguage[typeof appLanguage] = appTextPromise()[appLanguage]

    // console.log('log : ',appText)

    return (
        <div className='home'>
            <Header appText={appText}/>
        </div>
    )
}

export default Home