import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from '../global'
const Home = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(
      `${API}/users/${id}`
    );
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get(
      `${API}/users`
    );
    setUser(result.data);
  };

  return (
    <div className="home-page">
      <TableContainer component={Paper} sx={{ maxWidth: 2 / 3 }}>
        <Table size="small" stickyHeader aria-label="sticky table">
          {users.length > 0 ? (
            <>
              <TableHead>
                <TableRow key="titles">
                  {["#", "NAME", "USERNAME", "EMAIL", "EDIT", "DELETE"].map(
                    (item) => (
                      <TableCell size="small" align="left">
                        <b>{item}</b>
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .map((user, index) => (
                    <TableRow
                      key={user.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      {[
                        index + 1,
                        user.name,
                        user.username,
                        user.email,
                        <EditIcon
                          onClick={() => navigate(`/edituser/${user.id}`)}
                        />,
                        <DeleteIcon onClick={() => deleteUser(user.id)} />,
                      ].map((item) => (
                        <TableCell size="small" align="left">
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </>
          ) : (
            <div className="NoData">
              <h4>No data to show</h4>
            </div>
          )}
        </Table>
      </TableContainer>
      {/* <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <Button
                variant="contained"
                onClick={() => navigate(`/user/${user.id}`)}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/edituser/${user.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Home;
