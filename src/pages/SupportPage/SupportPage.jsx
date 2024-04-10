import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import { Wrap } from "../ManagerPage/ManagerPage.styled";
import SupportItems from "../../components/SupportItems/SupportItems";


const SupportPage = () => {
    return (
        <Wrap>   
            <Navbar />
            <div style={{
                display: "block",
                padding: "20px 35px",
                }}>
             <Header />
            <SupportItems />
            </div>   
             
        </Wrap>
    )
}

export default SupportPage;