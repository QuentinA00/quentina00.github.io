import { AppTextInterfaces } from "../interfaces/appTextInterfaces"
import { fetchWithPromise } from "../utils/api/promiseWrapper"

// Initialize the promise outside the component to ensure it is created only once
// This avoids multiple fetches
// will works well with React Suspense
// returns a function, not the actual data btw that's why the returned function has to be called below, in the component.
const appTextPromise = fetchWithPromise('./assets/jsons/appText.json')

const Home = () => {

    const appText:AppTextInterfaces = appTextPromise()

    // console.log('log : ',appText)

    return (
        <div className='home'>
            <p>{appText.title}</p>
            <p>{appText.presentation.en}</p>
            <p>{appText.menuBar.sections.section1.en}</p>
            <p>{appText.menuBar.sections.section1.fr}</p>
        </div>
    )
}

export default Home