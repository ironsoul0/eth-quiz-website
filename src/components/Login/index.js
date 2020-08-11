import React, { useState } from "react";
import styles from "./Login.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { login as loginAction } from "../../store/slices/authSlice";
import * as Yup from "yup";
import { loginCall, registerCall } from "../../api/auth";

function Login(props) {
  const [login, setLogin] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
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
          setSubmitted("Submitting");
          const funcCall = login
            ? loginCall(fields.email, fields.password)
            : registerCall(fields.username, fields.email, fields.password);
          funcCall
            .then((result) => {
              console.log(result);

              if (result.success) {
                dispatch(loginAction(result.token));
              } else {
                setSubmitted("Bad data");
              }
            })
            .catch(() => {
              setSubmitted("Bad data");
            });
        }}
        render={({ errors, status, touched }) => (
          <Form className={styles.card}>
            <h3 className={styles.title}>{login ? "Login" : "Register"}</h3>
            {!login && (
              <div className="form-group">
                <Field
                  name="username"
                  type="text"
                  placeholder="Login"
                  className={styles.form_control}
                />
              </div>
            )}
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
            {submitted && <p style={{ marginLeft: "50px" }}>{submitted}</p>}
            {/* Change URL link  */}
            <br />
            <span onClick={() => setLogin(!login)} className={styles.span}>
              {login ? "Register an account" : "Login"}
            </span>
          </Form>
        )}
      ></Formik>
    </>
  );
}

export default Login;
