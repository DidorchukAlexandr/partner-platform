import useForm from "../../shared/hooks/useForm";
import TextField from "../TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";
import { WrapForm, Title, Form, Btn } from "./LoginForm.styled";


const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
     const { email, password } = state;
  return (
      <WrapForm>
          <Title>Rejestracja</Title>
          <Form onSubmit={handleSubmit}>
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
              <Btn type="submit">Login</Btn>
      </Form>
    </WrapForm>
  );
};

export default LoginForm;