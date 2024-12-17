import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import './App.css'

const App = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.firstName = "First Name must contain only letters";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = "Last Name must contain only letters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)
    ) {
      errors.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number";
    }

    return errors;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg opacity-0 animate-fadeInUp">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registration Form
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              <div className="flex flex-col opacity-0 animate-fadeInUp animate-delay-100">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium mb-1 text-gray-700"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  placeholder="Enter First Name"
                  className={`input py-2 px-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    touched.firstName && errors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col opacity-0 animate-fadeInUp animate-delay-200">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium mb-1 text-gray-700"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  placeholder="Enter Last Name"
                  className={`input py-2 px-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    touched.lastName && errors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col opacity-0 animate-fadeInUp animate-delay-300">
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-1 text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className={`input py-2 px-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col opacity-0 animate-fadeInUp animate-delay-400">
                <label
                  htmlFor="password"
                  className="text-sm font-medium mb-1 text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  className={`input py-2 px-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transform transition-all duration-300 ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
