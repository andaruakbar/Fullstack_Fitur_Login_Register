import React from "react";
import CustomButton from "../components/Button";
import { Input } from "../components/Input";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      swal({
        icon: "success",
        title: "Login Successfully",
      });
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="font-bold text-2xl ">Login</span>
      <div className=" px-10 py-10 min-w-[40%] shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              id="input-email"
              type={"email"}
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-7">
            <Input
              id="input-password"
              type={"password"}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <CustomButton id="btn-submit" label={"SUBMIT"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
