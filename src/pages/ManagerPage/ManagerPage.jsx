import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import UserProfile from "../../components/userProfile/UserProfile";
import { Wrap } from "./ManagerPage.styled";


const ManagerPage = () => {
    return (
        <Wrap>   
            <Navbar />
            <div style={{
                display: "block",
                padding: "20px 35px",
                }}>
             <Header />
             <UserProfile />
            </div>   
        </Wrap>
    )
}

export default ManagerPage;