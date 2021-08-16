import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import firebase from '../config/firebase';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const history = useHistory()

    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
            .then(res=>{
              history.replace("/")
            })
            .catch(err=>{
              Formik.setFieldError("email",err.message)
            })
        }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required().min(6),
        })}
      >
        {(formik) => (
          <div>
            <div className=" position-relative" style={{ height: "100vh" }}>
              <div
                className="bg-success rounded position-absolute  w-25 p-3 pt-4 "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -70%)",
                  backgroundImage:
                    " linear-gradient(rgb(11, 112, 45), rgb(26, 235, 95))",
                }}
              >
                <h4 className="text-light text-center">Sign Up Here</h4>
                <Form onSubmit={formik.handleSubmit} className="text-light">
                  <div className="form-group my-4">
                    <Field
                      name="email"
                      className="form-control"
                      placeholder="Email or Username"
                      id="email"
                      type="email"
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="form-group my-4">
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                  </div>
                  <button type="" className="btn btn-primary form-control">
                    Sign Up
                  </button>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    );
}
