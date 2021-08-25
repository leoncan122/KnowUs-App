import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputPassword from "../../../components/authentication/InputPassword";
import { userContext } from "../../../context/userContext";
import fetchData from "../../../utils/fetchData";
import Card from "./Card";

export default function Login(props) {
    const { setUserLoged } = useContext(userContext);

    const [error, setError] = useState("");

    // email functionality
    const [email, setEmail] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };
        const url = `${process.env.REACT_APP_API_URL}auth/login`;
        const data = await fetchData(loginData, url, "POST");

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
            <div className="login">
                <h1>Welcome!</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <InputEmail email={email} onChange={setEmail} />
                    <InputPassword password={password} onChange={setPassword} />
                    <button type="submit" className="btn">
                        Login
                    </button>
                    {error && <p>{error}</p>}
                </form>
                <h3>Already registered?</h3>
                <Link className="link" to="/register">
                    SignUp
                </Link>
            </div>
        </div>
    );
}
