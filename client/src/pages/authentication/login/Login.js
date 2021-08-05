import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputPassword from "../../../components/authentication/InputPassword";
import { userContext } from "../../../context/userContext";
import fetchData from "../../../utils/fetchData";

export default function Login(props) {
    const { userLoged, setUserLoged } = useContext(userContext);

    // email functionality
    const [email, setEmail] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };
        const url = "http://localhost:4000/auth/login";
        const data = await fetchData(loginData, url, "POST");

        setUserLoged(data);

        if (data) {
            setInterval(() => {
                props.history.push("/");
            }, 1000);
        }
    };

    return (
        <div className="login">
            <h1>Welcome!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputEmail email={email} onChange={setEmail} />
                <InputPassword password={password} onChange={setPassword} />
                <button type="submit" className="btn">
                    Login
                </button>
                {userLoged === false && <p>Try again!</p>}
            </form>
            <h3>Already registered?</h3>
            <Link to="/register">SingUp</Link>
        </div>
    );
}
