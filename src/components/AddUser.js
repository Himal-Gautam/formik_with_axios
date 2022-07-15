import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@mui/material/Input";
import { API } from "../global";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const AddUser = () => {
  let navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string()
      .min(4, "Must be 4 charecters or more")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    username: Yup.string()
      .min(4, "Must be 4 charecters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Enter valid Email")
      .required("Email is required"),
    phone: Yup.string()
      .min(6, "Number must be at least 6 charaters")
      .required("Number is required"),
    website: Yup.string()
      .min(6, "Number must be at least 6 charaters")
      .required("Number is required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        phone: "",
      }}
      validator={() => ({})}
      onSubmit={async (values) => {
        await axios.post(`${API}/users`, values);
        navigate("/");
        console.log(values);
      }}
    >
      {({ handleChange, values, handleSubmit, isSubmitting }) => (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <h2>Add A User</h2>
              <Input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <Input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <Button type="submit" disabled={isSubmitting}>Add User</Button>
            </Stack>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AddUser;
