import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <div className="navbar" >
            <h1>
                BRAJTON NEWS
            </h1>
            <div className="nav-container">
            <div className="links">
                <Link to="/"> Home </Link>
                {!user ? <Link to="/login"> Login </Link> : <Link to="/createpost"> Create post </Link> }
                
            </div>
            <div className="user">
                {user &&
                    <div className="userNav">
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} width="30" height="30"  />
                        <button className="logoutBtn" onClick={signUserOut}> Log Out </button>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}