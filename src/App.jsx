import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fullname, setFullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [compassword, setcompassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

    setFullname('');
    setemail(" ");
    setpassword('');
    setcompassword('');
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <div className="shadow-lg p-4 rounded-lg flex flex-col gap-4  bg-white">
          <div>
            <h1 className="text-2xl text-center ">Create an account</h1>
          </div>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="w-96 p-4  rounded-lg flex flex-col gap-3"
          >
            <input
              className="border-2 border-black px-3 py-2 "
              type="text"
              placeholder="enter your name"
              value={fullname}
              onChange={(e) => {
                console.log(e.target.value);
                setFullname(e.target.value);
              }}
            />
            <input
              className="border-2 border-black px-3 py-2 "
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setemail(e.target.value);
              }}
            />
            <input
              className="border-2 border-black px-3 py-2 "
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => {
                console.log(e.target.value);
                setpassword(e.target.value);
              }}
            />
            <input
              className="border-2 border-black px-3 py-2 "
              type="password"
              placeholder="comform password"
              value={compassword}
              onChange={(e) => {
                console.log(e.target.value);
                setcompassword(e.target.value);
              }}
            />
            <button className="border-2 border-black rounded-xl bg-emerald-400 py-3 text-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
