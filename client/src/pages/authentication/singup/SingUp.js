import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputUsername from "../../../components/authentication/InputUsername";
import InputPassword from "../../../components/authentication/InputPassword";
import fetchData from "../../../utils/fetchData";
import { userContext } from "../../../context/userContext";

import "../SingupAndLogin.css";
import Card from "../login/Card";

export default function SingUp(props) {
    const { setUserLoged } = useContext(userContext);

    const [error, setError] = useState("");

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
        const url = `${process.env.REACT_APP_API_URL}auth/signup`;
        const data = await fetchData(signupData, url, "POST");

        if (data.error) {
            setError(data.error);
        }
        if (data.isAuthenticated) {
            setUserLoged(data);
            window.sessionStorage.setItem("id", data.userId);
            setTimeout(() => {
                props.history.push("/");
            }, 1000);
        }
    };

    return (
        <div className="background-auth">
            <Card />
            <div className="singup">
                <h1>Welcome!</h1>
                <form className="singup-form" onSubmit={handleSubmit}>
                    <InputEmail email={email} onChange={setEmail} />
                    <InputUsername Username={username} onChange={setUsername} />
                    <InputPassword password={password} onChange={setPassword} />
                    <button type="submit" className="btn">
                        Signup
                    </button>
                    {error && <p>{error}</p>}
                </form>
                <h3>Already registered?</h3>
                <Link className="link" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
}
