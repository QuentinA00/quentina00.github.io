import { AppTextInterface } from "../interfaces/appTextInterfaces"
import InnerPage from "../components/innerPages/InnerPage"

interface HomeProps {
    appText:AppTextInterface
}

const Home:React.FC<HomeProps> = ({appText}) => {
    return (
        <div className='home'>
            <InnerPage appText={appText}/>
        </div>
    )
}

export default Home