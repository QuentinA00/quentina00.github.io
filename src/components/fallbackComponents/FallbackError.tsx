import { styleVariables } from "../../style/globalRules"

const FallbackError = () => {

    const style = {
        container: {
            background:styleVariables.color3_light,
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'5rem'
        },
        paragraph:{
            // fontWeight:'200'
        }
    }

    return (
        <div className="fallbackError" style={style.container}>
            <p style={style.paragraph}>An error occured...</p>
        </div>
    )
}

export default FallbackError