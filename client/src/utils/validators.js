export const emailValidator = (e, setErrors) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let str = String(e.target.value);

    setErrors(state => ({
        ...state,
        [e.target.name]: !regex.test(str)
    }));
}

export const minLengthValidator = (e, minLength, setErrors, values) => {
    setErrors(state => ({
        ...state,
        [e.target.name]: values[e.target.name].length < minLength,
    }));
}

export const passwordDoNotMatch = (values, setErrors) => {
    setErrors(errors => ({
        ...errors,
        'repeatPassword': values.password != values.repeatPassword
    }));
}