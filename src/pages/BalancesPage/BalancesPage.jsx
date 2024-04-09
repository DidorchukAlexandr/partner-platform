import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import { Wrap } from "../ManagerPage/ManagerPage.styled";
import PaymentHistory from "../../components/PaymentHistory/PaymentHistory";


const BalancesPage = () => {
    return (
        
            <Wrap>   
            <Navbar />
            <div style={{
                display: "block",
                padding: "20px 35px",
                }}>
             <Header />
                <PaymentMethod /> 
             <PaymentHistory />   
                    
            </div>   
        </Wrap>
    )
}

export default BalancesPage;