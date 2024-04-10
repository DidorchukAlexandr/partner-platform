import RegisterForm from '../../components/RegisterForm/RegisterForm';
import mainLogo from "../../components/images/mainLogo.png";
import { Title, Image, Wrap, PageWrap } from './RegisterPage.styled';
import Container from '../../components/Container/Container';

const RegisterPage = () => {

    return (
        <Container >
        <PageWrap>
            
                <RegisterForm />
                
            </PageWrap>
            <div style={{
                    display: "flex",
                    width: "50%",
                    height: "100vh",
                    background: "rgb(255, 255, 255)",
                   
    }}>
            <Wrap>
                <div style={{
                        display: "block",
                    marginLeft: "23%",
                     }}>
                <Image src={mainLogo}
                    alt="mainLogo" />
                    <Title to="/menedżer">Analytix</Title>
                    </div>
            </Wrap>
            </div>
            </Container>
    )
}

export default RegisterPage;