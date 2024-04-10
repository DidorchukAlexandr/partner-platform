// import { useDispatch } from "react-redux";
// import { login } from "../../redux/auth/auth-operations";
import mainLogo from "../../components/images/mainLogo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Wrap, Image, Title } from "./LoginPage.styled";


const LoginPage = () => {
// const dispatch = useDispatch();

//     const onLogin = (data) => {
//         dispatch(login(data));
//     }

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