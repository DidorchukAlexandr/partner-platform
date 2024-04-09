import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import { Wrap } from "../ManagerPage/ManagerPage.styled";
import UserSearch from "../../components/UserSearch/UserSearch";
import ItemData from "../../components/ItemData/ItemData";
import { Text } from "../../pages/UsersPage/UsersPage.styled";


const OfferPage = () => {
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
                    <Text>Oferuje</Text>
                <UserSearch />
                </div>
                <ItemData />
            </div>   
        </Wrap>
    )
}

export default OfferPage;