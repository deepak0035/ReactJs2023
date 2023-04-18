import React, { useState } from "react";

const time = new Date();
let cTime = time.toLocaleTimeString();

const UseState = () => {
  const [currTime, setCTime] = useState(cTime);
  const [formData, setformData] = useState({
    username: "",
    email: "",
  });

  const updateTime = () => {
    cTime = new Date().toLocaleTimeString();
    //alert(cTime);
    setCTime(cTime);
  };
  const updateFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Current time is {currTime}</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="username"
              value={formData.username}
              onChange={updateFormData}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={updateFormData}
            />
          </div>
        </form>
      </div>
      <div className="container">
        <h1>{`My Name is ${formData.username} and my email is ${formData.email}`}</h1>
      </div>
    </>
  );
};

export default UseState;
