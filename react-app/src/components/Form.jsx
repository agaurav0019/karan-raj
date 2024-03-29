import React, { useState } from "react";

const Form = () => {
  const [noOfAddress, setNoOfAddress] = useState(1);
  const [noOfPhoneNumber, setNoOfPhoneNumber] = useState(1);
  const [name, setName] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });
  const [phoneNumber, setPhoneNumber] = useState([
    {
      id: "1",
      phoneNumber: "",
    },
  ]);
  const [addressDetail, setAddressDetail] = useState([
    {
      id: "1",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  ]);

  const onAddressAddHandler = (event) => {
    event.preventDefault();
    setNoOfAddress((prev) => prev++);
    setAddressDetail([
      ...addressDetail,
      {
        id: `${noOfAddress + 1}`,
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      },
    ]);
  };

  const addAnotherPhoneNumber = (event) => {
    event.preventDefault();
    setNoOfPhoneNumber((prev) => prev + 1);
    setPhoneNumber([
      ...phoneNumber,
      {
        id: `${noOfPhoneNumber + 1}`,
        phoneNumber: "",
      },
    ]);
  };

  const onPhoneNumberChangeHandler = (event, id) => {
    setPhoneNumber((prevAdd) =>
      prevAdd.map((phone) =>
        phone.id === id ? { ...phone, phoneNumber: event.target.value } : phone
      )
    );
  };

  const onNameChangeHandler = (event, nameToSet) => {
    setName({ ...name, [nameToSet]: event.target.value });
  };

  const onAddressChangeHandler = (event, id, addressLine) => {
    setAddressDetail((prevAdd) =>
      prevAdd.map((address) =>
        address.id === id
          ? { ...address, [addressLine]: event.target.value }
          : address
      )
    );
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const finalData = {
      ...name,
      addresses: addressDetail.map(({ id, ...rest }) => rest),
      phoneNumbers: phoneNumber.map(({ id, ...rest }) => rest),
    };
    // Add post request here
  };

  return (
    <form className="form p-5">
      <div className="mb-3 fs-5 fw-bold">Fill User Detail</div>
      <div
        className="row border border-danger p-3"
        style={{ borderRadius: "5px" }}
      >
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label for="firstName" className="form-label fs-5">
              First Name
            </label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter First Name"
              value={name.firstName}
              onChange={(event) => onNameChangeHandler(event, "firstName")}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label for="middleName" className="form-label fs-5">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              placeholder="Enter Middle Name"
              value={name.middleName}
              onChange={(event) => onNameChangeHandler(event, "middleName")}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="mb-3">
            <label for="lastName" className="form-label fs-5">
              Last Name
            </label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              value={name.lastName}
              onChange={(event) => onNameChangeHandler(event, "lastName")}
            />
          </div>
        </div>
      </div>
      {addressDetail.map((item) => (
        <div className="row mt-4">
          <div className="fs-5 fw-bold">Address Detail {item.id}</div>
          <div className="border border-danger p-3 mt-3">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="addressLine1" className="form-label fs-5">
                    Address Line 1
                  </label>
                  <textarea
                    className="form-control"
                    id="addressLine1"
                    rows="2"
                    value={item.addressLine1}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "addressLine1");
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="addressLine2" className="form-label fs-5">
                    Address Line 2
                  </label>
                  <textarea
                    className="form-control"
                    id="addressLine2"
                    rows="2"
                    value={item.addressLine2}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "addressLine2");
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label for="city" className="form-label fs-5">
                    City
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter City Name"
                    value={item.city}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "city");
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label for="state" className="form-label fs-5">
                    State
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="Enter State Name"
                    value={item.state}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "state");
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label for="country" className="form-label fs-5">
                    Country
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Enter Country Name"
                    value={item.country}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "country");
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="mb-3">
                  <label for="zipCode" className="form-label fs-5">
                    Zip Code
                  </label>
                  <input
                    required={true}
                    type="number"
                    className="form-control"
                    id="zipCode"
                    placeholder="Enter Zip Code"
                    value={item.zipCode}
                    onChange={(event) => {
                      onAddressChangeHandler(event, item.id, "zipCode");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="fs-5 mt-3 mb-2 fw-bold">Phone Number</div>
      <div className="row">
        {phoneNumber.map((item) => (
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="mb-3">
              <input
                required={true}
                type="number"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                value={item.phoneNumber}
                onChange={(event) => {
                  onPhoneNumberChangeHandler(event, item.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <div>
          <button
            onClick={addAnotherPhoneNumber}
            className="btn btn-md btn-primary me-3"
          >
            Add Other Phone Number
          </button>
          <button
            onClick={onAddressAddHandler}
            className="btn btn-md btn-primary"
          >
            Add Other Address
          </button>
        </div>
        <div className="ms-3">
          <button
            className="btn btn-md btn-danger me-3"
            onSubmit={(event) => onSubmitHandler(event)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
