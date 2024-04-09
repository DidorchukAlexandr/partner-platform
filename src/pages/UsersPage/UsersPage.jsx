import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import UserSearch from "../../components/UserSearch/UserSearch";
import { Wrap } from "../ManagerPage/ManagerPage.styled";
import { Text } from "./UsersPage.styled";
import ItemData from "../../components/ItemData/ItemData";



const UserPage = () => {
    return (
         <Wrap>   
            <Navbar />
            <div style={{
                display: "block",
                padding: "20px 35px",
                }}>
                <Header />
                <div style={{
                    display: "flex",
                    alignItems: "center",
                     marginBottom: "20px"
                }}>
                    <Text>Użytkownicy</Text>
                <UserSearch />
                </div>
                <ItemData />
            </div>   
        </Wrap>
    )
}

export default UserPage;