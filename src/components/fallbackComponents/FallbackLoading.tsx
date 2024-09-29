import { styleVariables } from "../../style/globalRules"
import ButtonWithIcon from "../ButtonWithIcon"

const FallbackLoading = () => {

    const style = {
        container: {
            background:styleVariables.color3_light,
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'5rem',
            margin:'2rem 0rem',
            transition:'.15s'
        },
        paragraph:{
            // fontWeight:'200'
            fontSize:'.9rem'
        }
    }

    return (
        <div className="fallbackLoading" style={style.container}>
            {/* <p>Loading...</p> */}
            <ButtonWithIcon imageName="" text="loading..." />
        </div>
    )
}

export default FallbackLoading