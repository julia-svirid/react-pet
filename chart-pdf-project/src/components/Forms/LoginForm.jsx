import React, {Fragment} from 'react';
import {H1} from "../UI/Text";
import {Input, InputContainer, Label, Link, StyledForm} from "../UI/Form";
import Button from "../UI/Button";
import {useNavigate} from "react-router";

const LoginForm = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/')
    }
    const goToRegisterPage = () => {
        navigate('/register')
    }
    return (
        <Fragment>
            <H1>
                Login form
            </H1>
            <StyledForm>
                <InputContainer>
                    <Label>E-mail</Label>
                    <Input type='email' />
                </InputContainer>
                <InputContainer>
                    <Label>Password</Label>
                    <Input type='password' />
                </InputContainer>
                <Button onClick={login} text='Login'/>
                <Link onClick={goToRegisterPage}>Don't have an account? Register right now</Link>
            </StyledForm>
        </Fragment>
    );
};

export default LoginForm;