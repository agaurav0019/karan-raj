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

  console.log(addressDetail);
  console.log(phoneNumber);
  debugger;

  const onSubmitHandler = (event)=>{
    event.preventDefault();
      const finalData = {
        ...name,
        addresses: addressDetail.map(({ id, ...rest }) => rest),
        phoneNumbers: phoneNumber.map(({ id, ...rest }) => rest),
      };
      console.log(finalData)
      debugger
  }

  return (
    <form className="form p-5" onSubmit>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="mb-3">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Enter First Name"
              value={name.firstName}
              onChange={(event) => onNameChangeHandler(event, "firstName")}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="mb-3">
            <label for="middleName" class="form-label">
              Middle Name
            </label>
            <input
              type="text"
              class="form-control"
              id="middleName"
              placeholder="Enter Middle Name"
              value={name.middleName}
              onChange={(event) => onNameChangeHandler(event, "middleName")}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="mb-3">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              value={name.lastName}
              onChange={(event) => onNameChangeHandler(event, "lastName")}
            />
          </div>
        </div>
      </div>
      {addressDetail.map((item) => (
        <div className="row">
          <div>Address Detail {item.id}</div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div class="mb-3">
                <label for="addressLine1" class="form-label">
                  Address Line 1
                </label>
                <textarea
                  class="form-control"
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
              <div class="mb-3">
                <label for="addressLine2" class="form-label">
                  Address Line 2
                </label>
                <textarea
                  class="form-control"
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
              <div class="mb-3">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
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
              <div class="mb-3">
                <label for="state" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
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
              <div class="mb-3">
                <label for="country" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
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
              <div class="mb-3">
                <label for="zipCode" class="form-label">
                  Zip Code
                </label>
                <input
                  type="number"
                  class="form-control"
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
      ))}
      <div>
        {phoneNumber.map((item) => (
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
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
      <div>
        <button
          onClick={addAnotherPhoneNumber}
          className="btn btn-sm btn-primary me-3"
        >
          Add Other Phone Number
        </button>
        <button
          onClick={onAddressAddHandler}
          className="btn btn-sm btn-primary"
        >
          Add Other Address
        </button>
      </div>
      <button className="btn btn-sm btn-primary me-3" onClick={(event)=>onSubmitHandler(event)}>Submit</button>
    </form>
  );
};

export default Form;
