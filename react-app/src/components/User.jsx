import React from "react";
import {Link} from "react-router-dom"

const User = () => {
  return (
    <>
    <div className="row pt-5 ps-5 pe-5">
        <div classNAme="col-lg-6 col-md-6 col-sm-6">
            User's Table
        </div>
        <div classNAme="col-lg-6 col-md-6 col-sm-6">

        </div>
    </div>
      <div className="p-5">
        <table class="table table-striped mb-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-sm btn-primary me-3">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
            <Link to="/add-user" className="btn btn-sm btn-primary">Add User</Link>
        </div>
      </div>
    </>
  );
};

export default User;
