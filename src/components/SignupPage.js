import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignupPage() {
  const formik = useFormik({
    initialValues: { company: '', email: '', password: '', role: 'brand' },
    validationSchema: Yup.object({
      company: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Too short').required('Required'),
    }),
    onSubmit: values => {
      // Call signup service here (e.g., api.signup(values))
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="company" placeholder="Company Name" onChange={formik.handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={formik.handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={formik.handleChange} />
      <select name="role" onChange={formik.handleChange}>
        <option value="brand">Brand</option>
        <option value="company">Company</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupPage;
