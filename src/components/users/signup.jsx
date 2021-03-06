import React from "react";
import Validation from "../common/validation";

import * as userService from "../../services/userService";
import Input from "../common/Input";
import Joi from "joi-browser";

class Signup extends Validation {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(6),
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
    gender: Joi.string().required(),
  };

  // validate = () => {
  //   const { data } = this.state;

  //   const result = Joi.validate(data, this.schema, { abortEarly: false });

  //   console.log("joi", result);
  //   const errors = {};

  //   if (data.name.trim() === "") errors.name = "name is requrired";
  //   if (data.email.trim() === "") errors.email = "Enter the E-mail address";
  //   if (data.password.trim() === "") errors.password = "password is requrired";
  //   return Object.keys(errors).length === 0 ? {} : errors;
  // };

  doSubmit = async () => {
    // console.log(this.state.data);
    const success = await userService.register(this.state.data);

    if (success) {
      window.location = "/signup";
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row m-5 ">
          <div className="col-8 text-center box " style={{ width: "auto" }}>
            <h2 className="">welcome E-commerce website</h2>
          </div>

          <div className="col-4">
            <form
              onSubmit={this.handleSubmit}
              className="p-3 box "
              style={{ width: "300px" }}
            >
              <h1 className="text-center"> Sign up</h1>
              <Input
                name="name"
                label="Name"
                type="text"
                value={data.name}
                placeholder="Name"
                className="form-control "
                autoFocus="true"
                onChange={this.handleChange}
                error={errors.name}
                // className=""
              />

              <Input
                name="email"
                label="Email address"
                type="text"
                value={data.email}
                placeholder="Enter email"
                className="form-control "
                onChange={this.handleChange}
                error={errors.email}
              />

              <Input
                name="password"
                label="Password"
                type="password"
                value={data.password}
                placeholder="Password"
                className="form-control "
                onChange={this.handleChange}
                error={errors.password}
              />

              <div className="radio">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    checked={data.gender === "Male"}
                    onChange={this.handleChange}
                    error={errors.gender}
                  />
                  Male
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={data.gender === "Female"}
                    onChange={this.handleChange}
                    error={errors.gender}
                  />
                  Female
                </label>
              </div>

              {/* <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              placeholder="Password"
              onChange={this.handleChange}
            ></input>
          </div> */}
              <center>
                <button
                  type="submit"
                  className=" btn btn-primary  btn-block mb-3 mt-2"
                >
                  Sign up
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
