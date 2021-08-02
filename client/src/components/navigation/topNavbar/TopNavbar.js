import React from "react";
import GeneralBtn from "../../buttons/GeneralBtn";

export default function TopNavbar() {
    return (
        <div>
            <GeneralBtn btnName="Login" btnType="button" path="/login" />
            <GeneralBtn btnName="Sign Up" btnType="button" path="/register" />
        </div>
    );
}
