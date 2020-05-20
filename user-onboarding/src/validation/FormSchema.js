import * as yup from 'yup'

const FormSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('First Name is required'),
    last_name: yup
        .string()
        .required('Last Name is required'),
    email: yup
        .string()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
});

export default FormSchema;
