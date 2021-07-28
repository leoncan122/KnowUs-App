/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from "react";
import InputEmail from "../components/authentication/InputEmail";
import InputUsername from "../components/authentication/InputUsername";
import InputPassword from "../components/authentication/InputPassword";
import SubmitBtn from "../components/buttons/SubmitBtn";

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
        const SignUpData = { email, username, password };
        const url = "http://localhost:4000"; // BackEnd needed ************************
        fetchData(SignUpData, url); // BackEnd neede **************************
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
                <SubmitBtn btnName={"Sign Up"} />
            </form>
        </div>
    );
}
