import { Formik } from "formik";
import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Label,
  Field,
  ErrorMessage,
  Button,
} from "../../utils/styles/generalStyles";

const Register = () => {
  return (
    <>
      <Header isSecondary />
      <main>
        <Section title="Register">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordRepeat: "",
              githubUsername: "",
              zeplinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string().email("Invalid email address").required(),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(values);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordRepeat: "",
                  githubUsername: "",
                  zeplinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });
                actions.setSubmitting(false);
              }, 2000);
            }}
          >
            {(formik) => (
              <Form>
                <FormRow>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component="div" name="firstName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component="div" name="lastName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="password"
                    name="passwordRepeat"
                    placeholder="Password repeat..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component="div" name="passwordRepeat" />
                </FormRow>
                <FormRow>
                  <Button 
                  type="submit"
                  isSecondary
                  >Register</Button>
                </FormRow>
              </Form>
            )}
          </Formik>
        </Section>
      </main>
    </>
  );
};

export default Register;
