import { Link } from "react-router-dom"

export const ErrorPage = () =>{
    return(
        <div id="error-page">
            <h1>
                This page does not exist
            </h1>
            <h2>Go back to home page</h2>
            <Link className="btn logoutBtn" to="/">Home</Link>
            

        </div>
    )
}