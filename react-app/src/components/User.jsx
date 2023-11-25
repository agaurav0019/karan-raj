import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {data} from "./userData"

const User = () => {

  const [userData, setUSerData] = useState(data.users);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    const query = event.target.value.toLowerCase();

    if (query.trim() === '') {
      // If the search query is empty, display all users
      setFilteredUsers(userData);
    } else {
      // If there's a search query, filter users based on the query
      const filtered = userData.filter(user =>
        user.first_name.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    }
  }

  const onEditHandler=(id)=>{
    navigate(`/edit-user/${id}`)
  }

  const onDeleteHandler=(id)=>{
    console.log(id);
    // Add delete fetch request here
    // setUSerData()
  }

  useEffect(()=>{

  },[userData])

  return (
    <>
      <div className="row pt-5 ps-5 pe-5">
        <div className="col-lg-4 col-md-4 col-sm-6 fs-4 fw-bold">User's Table</div>
        <div className="col-lg-4 col-md-4 col-sm-6"></div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search User"
              value={searchText}
              onChange={(event)=>{onSearchChange(event)}}
            />
            <span className="input-group-text" id="basic-addon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <table className="table table-dark mb-5">
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
            {filteredUsers?.map((item)=>(<tr>
              <th scope="row">{item.id}</th>
              <td>{item.first_name} {item.middle_name} {item.last_name}</td>
              <td>{item.addresses.map((add, idx)=>(
                <>
                  {add.add_line1}, {add.add_line2}, {add.city}, {add.state}, {add.country}, {add.zipcode}
                  <br/>
                </>
              ))}</td>
              <td>
                {item.phoneNumbers.map((phone)=>(
                  <>
                    {phone.phone_number} 
                    <br/>
                  </>
                ))}
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-3" onClick={()=>onEditHandler(item.id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={()=>{onDeleteHandler(item.id)}}>Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
        <div className="row">
          <Link to="/add-user" className="btn btn-sm btn-primary">
            Add User
          </Link>
        </div>
      </div>
    </>
  );
};

export default User;
