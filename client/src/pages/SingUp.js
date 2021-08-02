import React, { useState } from "react";
import InputEmail from "../components/authentication/InputEmail";
import InputUsername from "../components/authentication/InputUsername";
import InputPassword from "../components/authentication/InputPassword";
import GeneralBtn from "../components/buttons/GeneralBtn";

export default function SingUp() {
    // email functionality
    const [email, setEmail] = useState("");

    // name functionality
    const [username, setUsername] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Sing Up submit
    /* const handleSubmit = async (e) => {
        e.preventDefault();
        const signUpData = { email, password, username };
        const url = "http://localhost:4000"; // BackEnd needed ************************
        fetchData(signUpData, url); // BackEnd needed **************************
    };
 */
    return (
        <div>
            <h1>Welcome!</h1>
            <form
            // onSubmit={handleSubmit}
            >
                <InputEmail email={email} onChange={setEmail} />
                <InputUsername Username={username} onChange={setUsername} />
                <InputPassword password={password} onChange={setPassword} />
                <GeneralBtn btnName="Sign Up" btnType="submit" />
            </form>
        </div>
    );
}
