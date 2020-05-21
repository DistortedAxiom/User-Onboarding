import * as yup from 'yup'

const FormSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First Name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .trim()
        .email('The email must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .min(6, 'Your password must be at least 6 characters long')
        .required('Password is required'),
    terms: yup
        .boolean()
        .required("You must accept Terms and Conditions")
        .oneOf([true], "You must accept Terms and Conditions")
});

export default FormSchema;
