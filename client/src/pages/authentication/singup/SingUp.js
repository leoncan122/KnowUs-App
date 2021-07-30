import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputUsername from "../../../components/authentication/InputUsername";
import InputPassword from "../../../components/authentication/InputPassword";
import GeneralBtn from "../../../components/buttons/GeneralBtn";
import "../SingupAndLogin.css";

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
        <div className="singup">
            <h1>Welcome!</h1>
            <form
                className="singup-form"
                // onSubmit={handleSubmit}
            >
                <InputEmail email={email} onChange={setEmail} />
                <InputUsername Username={username} onChange={setUsername} />
                <InputPassword password={password} onChange={setPassword} />
                <GeneralBtn btnName="SignUp" btnType="submit" />
            </form>
            <h3>Already registered?</h3>
            <Link to="/login">Login</Link>
        </div>
    );
}
