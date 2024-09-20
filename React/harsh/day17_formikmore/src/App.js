import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string().min(6, 'password must be at least 6 characters').required("required"),
    }),
    onSubmit: values => {
      console.log(values);
    }
  })
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input type="password" {...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
        </div>
        <button type="submit" >Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
