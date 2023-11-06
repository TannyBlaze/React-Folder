import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Email must be a valid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit} className="container">
                    <div className="form-outline mb-4">
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} id="form11" className="form-control border border-dark" />
                        <label className="form-label" htmlFor="form11">Email</label>
                    </div>
                    {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                    <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Name" />
                    {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" />
                    {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Formik