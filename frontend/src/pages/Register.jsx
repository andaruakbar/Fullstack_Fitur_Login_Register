import React from "react";
import { useState } from "react";
import CustomButton from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/users", {
        name,
        email,
        password,
        confPassword,
      })
      .then((res) => {
        console.log(res);
        swal({
          icon: "success",
          title: "Create Account Success",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="font-bold text-2xl ">Sign Up</span>
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <form>
          <div className="mb-5">
            <Input
              id="input-name"
              type={"text"}
              placeholder={"Fullname"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Input
              id="input-email"
              type={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Input
              id="input-password"
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-7">
            <Input
              id="input-confpassword"
              type={"password"}
              placeholder={"Confirm Password"}
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
          <div>
            <CustomButton
              id="btn-submit"
              label={"SUBMIT"}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
