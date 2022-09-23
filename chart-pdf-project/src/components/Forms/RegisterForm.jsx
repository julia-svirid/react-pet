import React, {Fragment, useState} from 'react';
import {Input, InputContainer, Label, Link, StyledForm} from "../UI/Form";
import {H1} from "../UI/Text";
import Button from "../UI/Button";
import {useNavigate} from "react-router";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });

    const [isValid, setIsValid] = useState({
        name: null, email: null, password: null, confirmPassword: null
    })

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormState({ ...formState, [name]: value });
    };

    const validatePasswordMatch = () => {
        return formState.password === formState.confirmPassword
    }

    const validateForm = (event) => {
        let isCorrect = false;
        if (event.target.name === 'name') {
            isCorrect = event.target.value.length > 2
        }
        if (event.target.name === 'email') {
            const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            isCorrect = regex.test(event.target.value)
        }
        if (event.target.name === 'password') {
            isCorrect = event.target.value.length > 6
        }
        setIsValid({...isValid, [event.target.name]: isCorrect})
    }

    const register = (event) => {
        event.preventDefault()
        if (isValid.name && isValid.password && isValid.email && validatePasswordMatch()){
            navigate('/')
        }
    }

    const goToLoginPage = () => {
        navigate('/login')
    }

    return (
        <Fragment>
            <H1>
                Register form
            </H1>
            <StyledForm>
                <InputContainer>
                    <Label>Name</Label>
                    <Input
                        type='name'
                        name='name'
                        onChange={handleFormChange}
                        onBlur={(event) => validateForm(event)}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>E-mail</Label>
                    <Input
                        type='email'
                        name='email'
                        onChange={handleFormChange}
                        onBlur={(event) => validateForm(event)}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Password (min 6 characters)</Label>
                    <Input
                        type='password'
                        name='password'
                        onChange={handleFormChange}
                        onBlur={(event) => validateForm(event)}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Confirm Password</Label>
                    <Input
                        type='password'
                        name='confirmPassword'
                        onChange={handleFormChange}
                        onBlur={(event) => validateForm(event)}
                    />
                </InputContainer>
                <Button
                    onClick={register}
                    text='Register'
                    onChange={handleFormChange}
                />
                <Link onClick={goToLoginPage}>Have an account? Login right now</Link>
            </StyledForm>
        </Fragment>
    );
};

export default RegisterForm;