import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from 'yup';


function FormikForm2() {
    const [FormData, setFormData] = useState({})
    let popUp = document.getElementById('popUp')
    const handlePopUp = () => {
        popUp.classList.remove("top-24")
    }
    const newValidations = Yup.object({
        name:Yup.string().min(3,'too short').max(20,'too long').required('Name Is Required'),
        email:Yup.string().email().required('Email Is Required'),
        age:Yup.number().min(18,'Invalid Age').max(60,'Invalid Age').required('Age Is Required'),
        gender:Yup.string().required('Gender Is Required'),
        hobby:Yup.array().min(1,'Atleast One Hobby Is Required'),
        country:Yup.string().required('Please Select Your Country'),
        comment:Yup.string().max(100,'Too Long').required('Please Leave a Comment'),
        pass:Yup.string().required('Password Is Required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Enter a strong password'),
        cnfpass:Yup.string()
        .required('Password Confirmation Required')
        .oneOf([Yup.ref('pass'),null],'Password Not Matching'),
    })
    return (
        <>
            <div className="w-full flex items-center flex-col pt-3">
                <div className="w-[332px] bg-[#1cfafa] border-2 px-4 py-2">
                    <Formik
                        validationSchema={newValidations}
                        initialValues={{ name: "",email:"", age: "", gender: "", hobby:[], country: "", comment: "", pass: "",cnfpass:"" }}
                        onSubmit={(values,action) => {
                            setFormData(values)
                            popUp.classList.add('top-24')
                            action.resetForm()

                        }}
                    >
                        <Form>
                            <Field type="text" placeholder="Enter Name" name="name" className="w-[300px] rounded-lg border my-1 h-8 leading-8 outline-none pl-2" /><br />
                            <span className="text-red-600"><ErrorMessage name='name'/></span>
                            <Field type="text" placeholder="Enter Email" name="email" className="w-[300px] rounded-lg border my-1 h-8 leading-8 outline-none pl-2" /><br />
                            <span className="text-red-600"><ErrorMessage name='email'/></span>
                            <Field type="text" placeholder="Enter Age" name="age" className="w-[300px] rounded-lg border my-1 h-8 leading-8 outline-none pl-2" /><br />
                            <span className="text-red-600"><ErrorMessage name='age'/></span><br />
                            <label htmlFor="">Gender :</label><br />
                            <Field type="radio" name="gender" value="Male" /> Male &nbsp;
                            <Field type="radio" name="gender" value="Female" /> Female &nbsp;
                            <Field type="radio" name="gender" value="Other" /> other <br />
                            <span className="text-red-600"><ErrorMessage name='gender'/></span><br />
                            <label htmlFor="">Hobby :</label><br />
                            <Field type="checkbox" name="hobby" value="Sleeping" />
                            <label htmlFor="" className="ml-1">Sleeping</label>&nbsp;
                            <Field type="checkbox" name="hobby" value="Coding" />
                            <label htmlFor="" className="ml-1">Coding</label>&nbsp;
                            <Field type="checkbox" name="hobby" value="Travelling" />
                            <label htmlFor="" className="ml-1">Travelling</label><br />
                            <span className="text-red-600"><ErrorMessage name='hobby'/></span>
                            <Field name="country" as="select" className="border my-2 outline-none">
                                <option value="" disabled>Select Your Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="UK">UK</option>
                                <option value="Russia">Russia</option>
                            </Field><br />
                            <span className="text-red-600"><ErrorMessage name='country'/></span>
                            <Field as="textarea" placeholder="Leave A Comment" name="comment" cols="28" rows="3" className="outline-none pl-2 border" />
                            <span className="text-red-600"><ErrorMessage name='comment'/></span>
                            <Field type="Password" placeholder="Enter Password" name="pass" className="w-[300px] rounded-lg border my-1 h-8 leading-8 outline-none pl-2" />
                            <span className="text-red-600"><ErrorMessage name='pass'/></span>
                            <Field type="Password" placeholder="Re-Enter Password" name="cnfpass" className="w-[300px] rounded-lg border my-1 h-8 leading-8 outline-none pl-2" />
                            <span className="text-red-600"><ErrorMessage name='cnfpass'/></span>
                            <button type="submit" className="w-[300px] rounded-lg hover:bg-blue-600 text-white my-1 bg-blue-500 border h-10 leading-10 duration-300 outline-none pl-2">Submit</button>
                        </Form>
                    </Formik>
                </div>
                <div className="shadow-2xl duration-500 border w-[500px] px-4 py-2 absolute left-1/3 bg-white -top-[100%]" id="popUp">
                    <div className="relative w-full">
                    <h1 className="w-full text-center h-10 leading-10 text-2xl my-2 font-semibold bg-green-400">SUCCESS</h1>
                    <h1 className="text-lg font-medium">Name : {FormData.name}</h1>
                    <h1 className="text-lg font-medium">Email : {FormData.email}</h1>
                    <h1 className="text-lg font-medium">Age : {FormData.age}</h1>
                    <h1 className="text-lg font-medium">Gender : {FormData.gender}</h1>
                    <h1 className="text-lg font-medium">Hobby : {FormData.hobby}</h1>
                    <h1 className="text-lg font-medium">Country : {FormData.country}</h1>
                    <h1 className="text-lg font-medium"> Comment : {FormData.comment}</h1>
                    <button type="submit" onClick={handlePopUp} className="w-full rounded-lg hover:bg-red-600 text-white my-1 bg-red-500 border h-10 leading-10 duration-300 outline-none">CLOSE POPUP</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormikForm2

