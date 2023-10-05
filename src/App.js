import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
      initialValues: {
          name: '',
          email: '',
          password: ''
      },
      onSubmit: values =>{
          console.log('form:', values);
          alert("Login Successful");
      },
      validate: values => {
          let errors = {};
          if(!values.name) {
              errors.name = "Field required";
          }
          if (!values.email) {
              errors.email = "Field Required";
          } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Username should be an email";
          }

          if (!values.password) {
              errors.password = "Field Required";
          }

          return errors;

          }

  })
  return (
    <div>
      <p>
         <form onSubmit = {formik.handleSubmit}>
                 <div>Name</div>
                 <input
                     type = "text"
                     id = "name"
                     name="name"
                     onChange={formik.handleChange}
                     value={formik.values.name}
                     />
                 {formik.errors.name ? <div style={{color:'red'}} id='nameError'>{formik.errors.name}</div>: null}
                 <div>Email</div>
                 <input
                     type = "email"
                     id = "emailFIeld"
                     name = "email"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     />
                 {formik.errors.email ? <div style={{color:'red'}} id='emailError'>{formik.errors.email}</div>: null}
             <div>Password</div>
                 <input
                     type = "password"
                     id = "pswField"
                     name = "password"
                     onChange={formik.handleChange}
                     value={formik.values.password}
                 />
                 {formik.errors.password ? <div style={{color:'red'}} id='pswError'>{formik.errors.password}</div>: null}

             <button type="submit" id="submitBtn">Submit</button>
         </form>
      </p>
    </div>
  );
}

export default App;
