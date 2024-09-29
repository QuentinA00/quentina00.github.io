import { AnimatePresence } from "framer-motion"
import { styleVariables } from "../../style/globalRules"
import AnimationWrapper from "../AnimationWrapper"

const FallbackError = () => {

    // note 29/09/24 : the animation of it is in the .scss file, because using keyframe within component is tough
    const style = {
        container: {
            background:styleVariables.color3_light,
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'5rem',
            margin:'2rem',
            transition:'.15s'
        },
        paragraph:{
            // fontSize:'.9rem'
        }
    }

    return (
        <div className="fallbackError fallbackComponent" style={style.container}>
            <p style={style.paragraph}>An error occured...</p>
        </div>
    )
}

export default FallbackError