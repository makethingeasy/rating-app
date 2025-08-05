import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginPage() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(`Logging in with:\nEmail: ${values.email}\nPassword: ${values.password}`);
      // Replace alert with your login logic
    },
  });

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(140deg, #1976d2 30%, #00c6fb 100%)',
      padding: '20px'
    }}>
      <form onSubmit={formik.handleSubmit} style={{
        background: '#fff',
        padding: '36px 32px',
        borderRadius: '12px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
        width: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <img
            src="/logo.png" // Replace with your logo path or URL
            alt="Login page"
            style={{ width: '80px', borderRadius: '16px', boxShadow: '0 2px 12px #eee' }}
          />
          <h2 style={{ margin: '12px 0 0', color: '#1976d2' }}>Login page</h2>
        </div>

        <label htmlFor="email" style={{ fontWeight: 600 }}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: formik.touched.email && formik.errors.email ? '2px solid #d32f2f' : '1.5px solid #b0b5c7',
            outline: 'none',
            fontSize: '16px',
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: '#d32f2f', fontSize: '13px', marginTop: '-12px' }}>
            {formik.errors.email}
          </div>
        ) : null}

        <label htmlFor="password" style={{ fontWeight: 600 }}>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: formik.touched.password && formik.errors.password ? '2px solid #d32f2f' : '1.5px solid #b0b5c7',
            outline: 'none',
            fontSize: '16px',
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: '#d32f2f', fontSize: '13px', marginTop: '-12px' }}>
            {formik.errors.password}
          </div>
        ) : null}

        <button type="submit" style={{
          marginTop: '14px',
          padding: '14px',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(90deg, #1976d2 40%, #00c6fb 100%)',
          color: '#fff',
          fontWeight: '700',
          fontSize: '18px',
          cursor: 'pointer',
          letterSpacing: '1px'
        }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
