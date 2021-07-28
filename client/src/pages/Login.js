import React, { useState } from "react";
import InputEmail from "../components/authentication/InputEmail";
import InputPassword from "../components/authentication/InputPassword";
import SubmitBtn from "../components/buttons/SubmitBtn";

export default function Login() {
    // email functionality
    const [email, setEmail] = useState("");

    // password functionality
    const [password, setPassword] = useState("");

    // Login submit
    /* const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password };
        const url = "http://localhost:4000"; // BackEnd needed ************************
        fetchData(loginData, url); // BackEnd needed **************************
    };
 */
    return (
        <div>
            <h1>Welcome!</h1>
            <form
            // onSubmit={handleSubmit}
            >
                <InputEmail email={email} onChange={setEmail} />
                <InputPassword password={password} onChange={setPassword} />
                <SubmitBtn btnName="Login" />
            </form>
        </div>
    );
}
// Eslintrc elimina las llaves de los props ver linea **** 29 *****
