
import Navbar from "../../components/Navbar/Navbar";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import Profile from "../../components/Profile/Profile";
import Header from "../../components/header/Header";
import { Wrap } from "../ManagerPage/ManagerPage.styled";


const ProfilePage = () => {
    return (
       
            <Wrap>   
            <Navbar />
            <div style={{
                display: "block",
                padding: "20px 35px",
                }}>
             <Header />
             <Profile />
             <PaymentMethod />     
                    
            </div>   
        </Wrap>
      
    )
}

export default ProfilePage;