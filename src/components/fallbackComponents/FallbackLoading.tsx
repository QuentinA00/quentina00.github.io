import { styleVariables } from "../../style/globalRules"
import ButtonWithIcon from "../ButtonWithIcon"

const FallbackLoading = () => {

    // note 29/09/24 : the animation of it is in the .scss file, because using keyframe within component is tough
    const style = {
        container: {
            background:styleVariables.color3_light,
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'5rem',
            margin:'2rem 0rem',
            transition:'.15s'
        }
    }

    return (
        <div className="fallbackLoading fallbackComponent" style={style.container}>
            <ButtonWithIcon imageName="" text="loading..." />
        </div>
    )
}

export default FallbackLoading