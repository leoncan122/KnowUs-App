import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputUsername from "../../../components/authentication/InputUsername";
import InputPassword from "../../../components/authentication/InputPassword";
import "../SingupAndLogin.css";
import fetchData from "../../../utils/fetchData";

export default function SingUp() {
    // email functionality
    const [email, setEmail] = useState("");

    // name functionality
    const [username, setUsername] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Sing Up submit
    const handleSubmit = async (e) => {
        console.log("intohandle");
        e.preventDefault();
        const signUpData = { email, password, username };
        const url = "http://localhost:4000/auth/signup";
        fetchData(signUpData, url);
    };

    return (
        <div className="singup">
            <h1>Welcome!</h1>
            <form className="singup-form" onSubmit={handleSubmit}>
                <InputEmail email={email} onChange={setEmail} />
                <InputUsername Username={username} onChange={setUsername} />
                <InputPassword password={password} onChange={setPassword} />
                <button type="submit" className="btn">
                    Signup
                </button>
            </form>
            <h3>Already registered?</h3>
            <Link to="/login">Login</Link>
        </div>
    );
}
