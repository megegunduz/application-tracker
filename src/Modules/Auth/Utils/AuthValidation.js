import validate from 'validate.js';

export const isValidEmail = email => {
    let constraints = {
        from: {
            email: true,
        }
    };

    return validate({from: email}, constraints) === undefined;
};

export const arePasswordsSame = (password, passwordRepeat) => {
    let constraints = {
        confirmPassword: {
            equality: "password",
        }
    };
    
    return validate({password: password, confirmPassword: passwordRepeat}, constraints) === undefined;
}