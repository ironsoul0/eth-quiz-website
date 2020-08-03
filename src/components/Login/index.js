import React, { useState } from "react";
import styles from "./Login.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import * as Yup from "yup";

function Login(props) {
  const [login, setLogin] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(fields) => {
          // Request to back-end
          alert(JSON.stringify(fields, null, 2));
        }}
        render={({ errors, status, touched }) => (
          <Form className={styles.card}>
            <h3 className={styles.title}>{login ? "Login" : "Register"}</h3>
            <div className="form-group">
              <Field
                name="email"
                type="text"
                placeholder="E-mail"
                className={
                  errors.email && touched.email
                    ? styles.is_invalid
                    : styles.form_control
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={
                  errors.password && touched.password
                    ? styles.is_invalid
                    : styles.form_control
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>
            <div className="form-group">
              <button
                className="button"
                type="submit"
                className="btn btn-primary mr-2"
              >
                {login ? "Login" : "Register"}
              </button>
            </div>
            {/* Change URL link  */}
            <br />
            <div onClick={() => setLogin(!login)} className={styles.span}>
              {login ? "Register an account" : "Login"}
            </div>
          </Form>
        )}
      ></Formik>
    </>
  );
}

export default Login;
