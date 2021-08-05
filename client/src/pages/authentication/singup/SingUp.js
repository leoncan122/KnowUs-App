import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputUsername from "../../../components/authentication/InputUsername";
import InputPassword from "../../../components/authentication/InputPassword";
import fetchData from "../../../utils/fetchData";
import { userContext } from "../../../context/userContext";

import "../SingupAndLogin.css";

export default function SingUp(props) {
    const { setUserLoged } = useContext(userContext);

    // email functionality
    const [email, setEmail] = useState("");
    // name functionality
    const [username, setUsername] = useState("");
    // password functionality
    const [password, setPassword] = useState("");

    // Sing Up submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const signupData = { email, username, password };
        const url = "http://localhost:4000/auth/signup";
        const data = await fetchData(signupData, url);

        setUserLoged(data);
        if (data) {
            setInterval(() => {
                props.history.push("/");
            }, 2000);
        }
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
