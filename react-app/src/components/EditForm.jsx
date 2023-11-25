import React,{useState} from "react";
import { useParams } from 'react-router-dom';
import {data} from "./userData"

const EditForm = () => {
    // const data = 

const { id } = useParams();
const dataToEdit = data.users.filter((item)=>item.id==id);
  const [userData, setUserData] = useState(dataToEdit[0]);

  const handleAddressChange = (e, addressId, field) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      addresses: prevUserData.addresses.map((address) =>
        address.id === addressId
          ? { ...address, [field]: e.target.value }
          : address
      ),
    }));
  };

  const handlePhoneChange = (e, phoneId, field) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      phoneNumbers: prevUserData.phoneNumbers.map((phoneNumber) =>
        phoneNumber.id === phoneId ? { ...phoneNumber, [field]: e.target.value } : phoneNumber
      ),
    }));
  };

  const handleInputChange = (e, fieldName) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: e.target.value,
    }));
  };

  const onSubmitHandler = ()=>{
    console.log(userData);
  }

  return (
    <form className="form p-5">
      <div className="mb-3 fs-5 fw-bold">Fill User Detail</div>
      <div
        className="row border border-danger p-3"
        style={{ borderRadius: "5px" }}
      >
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fs-5">
              First Name
            </label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter First Name"
              value={userData?.first_name}
              onChange={(e) => handleInputChange(e, 'first_name')}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label htmlFor="middleName" className="form-label fs-5">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              placeholder="Enter Middle Name"
              value={userData?.middle_name}
              onChange={(e) => handleInputChange(e, 'middle_name')}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label fs-5">
              Last Name
            </label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              value={userData?.last_name}
              onChange={(e) => handleInputChange(e, 'last_name')}
            />
          </div>
        </div>
      </div>
      {userData?.addresses?.map((item) => (
        <div className="row mt-4">
          <div className="fs-5 fw-bold">Address Detail {item.id}</div>
          <div className="border border-danger p-3 mt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="addressLine1" className="form-label fs-5">
                    Address Line 1
                  </label>
                  <textarea
                    className="form-control"
                    id="addressLine1"
                    rows="2"
                    value={item.add_line1}
                    onChange={(e) => handleAddressChange(e, item.id, 'add_line1')}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="addressLine2" className="form-label fs-5">
                    Address Line 2
                  </label>
                  <textarea
                    className="form-control"
                    id="addressLine2"
                    rows="2"
                    value={item.add_line2}
                    onChange={(e) => handleAddressChange(e, item.id, 'add_line2')}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="city" className="form-label fs-5">
                    City
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter City Name"
                    value={item.city}
                    onChange={(e) => handleAddressChange(e, item.id, 'city')}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="state" className="form-label fs-5">
                    State
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Enter State Name"
                    value={item.state}
                    onChange={(e) => handleAddressChange(e, item.id, 'state')}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="country" className="form-label fs-5">
                    Country
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Enter Country Name"
                    value={item.country}
                    onChange={(e) => handleAddressChange(e, item.id, 'country')}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="zipCode" className="form-label fs-5">
                    Zip Code
                  </label>
                  <input
                    required={true}
                    type="number"
                    className="form-control"
                    id="zipCode"
                    placeholder="Enter Zip Code"
                    value={item.zipcode}
                    onChange={(e) => handleAddressChange(e, item.id, 'zipcode')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="fs-5 mt-3 mb-2 fw-bold">Phone Number</div>
      <div className="row">
        {userData?.phoneNumbers?.map((item) => (
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="mb-3">
              <input
                required={true}
                type="ṭext"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                value={item.phone_number}
                onChange={(e) => handlePhoneChange(e, item.id, 'phone_number')}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <div className="ms-3">
          <button
            className="btn btn-md btn-danger me-3"
            onClick={(event) => onSubmitHandler(event)}
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
