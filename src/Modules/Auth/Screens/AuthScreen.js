import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserActionCreators } from '../';
import AuthScreenUI from './AuthScreenUI';

const AuthScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const _onPress_SignUp = () => {
        if (email.length === 0 || password.length === 0 || username.length === 0) {
            alert('Lütfen tüm alanları doldurun.');
        }
        else {
            dispatch(UserActionCreators.signUpRequest(email, password, username));
        }
    }

    const _onPress_SignIn = () => {
        if (email.length === 0 || password.length === 0) {
            alert('Lütfen tüm alanları doldurun.');
        }
        else {
            dispatch(UserActionCreators.signInRequest(email, password));
        }
    }

    return (
        <AuthScreenUI
            emailValue={email}
            passwordValue={password}
            passwordRepeatValue={passwordRepeat}
            usernameValue={username}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordRepeat={setPasswordRepeat}
            onChangeText_Username={setUsername}
            onPress_SignIn={_onPress_SignIn}
            onPress_SignUp={_onPress_SignUp}
        />
    )
}

export default AuthScreen;