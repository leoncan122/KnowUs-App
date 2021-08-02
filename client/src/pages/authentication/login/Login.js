import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../../../components/authentication/InputEmail";
import InputPassword from "../../../components/authentication/InputPassword";
import { userContext } from "../../../context/userContext";
// import fetchData from "../../../utils/fetchData";

export default function Login(props) {
    const { setUserLoged } = useContext(userContext);

    // email functionality
    const [email, setEmail] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };
        const url = "http://localhost:4000/auth/login";
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(loginData),
            });
            if (res.ok) {
                const data = await res.json();
                setUserLoged(data.isAuthenticated);
                props.history.push("/home");
            }
        } catch (error) {
            console.log(error);
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
            </form>
            <h3>Already registered?</h3>
            <Link to="/register">SingUp</Link>
        </div>
    );
}
