import React, {useContext} from 'react';
import'./Home.css';
import UserContext from "./userContext";

const Home = () => {
    const user = useContext(UserContext);

    if(user){
        console.log("user in Home", user);
        return(
            <div className="Home pt-5">
            <div className="container text-center">
            <h1 className="b-4 font-weight-bold">Welcome to ManageMyProperty</h1>
            <h2>All the tools in one convenient place!</h2>
            <p>Hello {user.firstname}</p>
            <p>Your property is: {user.property}</p>
            <p>Are you an admin?
            {user.is_admin ? <span>  Yes</span>:<span>  No</span>}</p>
            </div>
            </div>
            )
        }
        return(
            <div className="Home pt-5">
            <div className="container text-center">
            <h1 className="b-4 font-weight-bold">Welcome to ManageMyProperty</h1>
            <h2>All the tools in one convenient place!</h2>
            </div>
            </div>
        )
   
}

export default Home;