import mainLogo from "../../components/images/mainLogo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Wrap, Image, Title } from "./LoginPage.styled";


const LoginPage = () => {
    return (
         <>
            
            <LoginForm />
            <Wrap>
                <Image src={mainLogo}
                    alt="mainLogo" />
                <Title>Analytix</Title>
            </Wrap>
        </>
    )
}

export default LoginPage;