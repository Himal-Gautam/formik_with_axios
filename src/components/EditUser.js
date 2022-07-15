// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditUser = () => {
//   let navigate = useNavigate();
//   const { id } = useParams();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: ""
//   });

//   const { name, username, email, phone, website } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(
//       `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`,
//       user
//     );
//     navigate("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(
//       `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
//     );
//     setUser(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit A User</h2>
//         <form onSubmit={(e) => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={(e) => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditUser;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@mui/material/Input";
import { API } from "../global";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({});

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

  useEffect(() => {
    (async () => {
      const result = await axios.get(`${API}/users/${id}`);
      setuser(result.data);
    })();
  });

  return (
    
    <Formik
      initialValues={{
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phno,
      }}
      validator={() => ({})}
      onSubmit={async (values) => {
        await axios.put(`${API}/users/${id}`, values);
        navigate("/");
        console.log(values);
      }}
    >
      {({ handleChange, initialValues, handleSubmit, isSubmitting }) => (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <h2>Add A User</h2>
              <Input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={initialValues.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={initialValues.username}
                onChange={handleChange}
              />
              <Input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={initialValues.email}
                onChange={handleChange}
              />
              <Input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={initialValues.phone}
                onChange={handleChange}
              />
              <Button type="submit" disabled={isSubmitting}>
                Add User
              </Button>
            </Stack>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default EditUser;
