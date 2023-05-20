
import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name:Yup.string().min(3,'Too Short').max(20,'Too Long').required('Name Is Required'),
    email:Yup.string().email('Invalid Email').required('Email Is Required'),
    phone:Yup.number().max(9999999999,'Invalid Number').required('Number Is Required'),
    age:Yup.number().min(18,'Invalid Age').max(60,'Invalid Age').required('Age Is Required'),
    password:Yup.string()
    .required('Passsword Is Required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Enter Strong Password'),
    cnfPass:Yup.string()
    .required('Password Confirmation Required')
    .oneOf([Yup.ref('password'),null],'Password Not Matching')
})


