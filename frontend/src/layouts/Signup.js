import React, {useState} from "react";
import SignupForm from "../components/signup/SignupForm"

function Signup(){

    let initialState = {
        
    }

    const [newAccount, setNewAccount] = useState(initialState)

    return (
        <div>
            <h3>Sign up for a free Account</h3>
            <SignupForm />
        </div>
    )
}

export default Signup