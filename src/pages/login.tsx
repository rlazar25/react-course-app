import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"




export const Login = () =>{

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result)
        navigate("/")
    }

    return(
        <div className="login-page">
            <h1>
                Login page
            </h1>
            <div>
                <p>
                    Sign In With Google to Continue
                </p>

                <button className="logoutBtn" onClick={signInWithGoogle} >Sign In With Google</button>
            </div>
        </div>
    )
}