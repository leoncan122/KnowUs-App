import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputPassword from "../../../components/authentication/InputPassword";
import fetchData from "../../../utils/fetchData";

export default function Login() {
    // email functionality
    const [email, setEmail] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };
        const url = "http://localhost:4000/auth/login";
        fetchData(loginData, url);
    };

    return (
        <div className="login">
            <h1>Welcome!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputEmail email={email} onChange={setEmail} />
                <InputPassword password={password} onChange={setPassword} />
                <button type="submit" className="btn">
                    Signup
                </button>
            </form>
            <h3>Already registered?</h3>
            <Link to="/register">SingUp</Link>
        </div>
    );
}
