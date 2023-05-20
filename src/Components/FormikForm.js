import { useFormik } from 'formik'
import { FormSchema } from './FormSchema';

function FormikForm() {

    const formInitialvalues = {
        name:"",
        email:"",
        phone:"",
        age:"",
        password:"",
        cnfPass:""
    }
    const formik = useFormik({
        initialValues : formInitialvalues,
        validationSchema : FormSchema,
        onSubmit : (values,action) => {
            console.log(values);
            action.resetForm();
        }
    });

  return (
    <>
    <div className="w-full flex justify-center mt-6">
        <form onSubmit={formik.handleSubmit} className='w-[500px] border bg-white flex flex-col gap-4 items-center py-4'>
            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Name' value={formik.values.name} name='name' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.name && formik.touched.name ? <span className='text-red-600 pl-6 self-start'>{formik.errors.name}</span>:null}
            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Email' value={formik.values.email} name='email' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.email && formik.touched.email ? <span className='text-red-600 pl-6 self-start'>{formik.errors.email}</span>:null}
            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Phone' value={formik.values.phone} name='phone' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.phone && formik.touched.phone ? <span className='text-red-600 pl-6 self-start'>{formik.errors.phone}</span>:null}
            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Age' value={formik.values.age} name='age' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.age && formik.touched.age ? <span className='text-red-600 pl-6 self-start'>{formik.errors.age}</span>:null}
            <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter password' value={formik.values.password} name='password' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.password && formik.touched.password ? <span className='text-red-600 pl-6 self-start'>{formik.errors.password}</span>:null}
            <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Re-Enter password' value={formik.values.cnfPass} name='cnfPass' className='px-2 outline-none rounded-lg w-[450px] h-10 bg-white border'/>
            {formik.errors.cnfPass && formik.touched.cnfPass ? <span className='text-red-600 pl-6 self-start'>{formik.errors.cnfPass}</span>:null}
            <button type='submit' value="submit" className='duration-150 outline-none rounded-lg w-[450px] hover:bg-blue-600 h-10 border bg-blue-500 text-white'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default FormikForm
