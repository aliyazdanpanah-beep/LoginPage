import { useState, useEffect } from "react";
import Sigin from "../sigin/sigin";
import axios from "axios";
import "./login.css";

const Login = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const [siginItem, setSiginItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Signin")
      .then((result) => {
        setSiginItem(result.data.data);
      })
      .catch((error) => {
        console.log("Erorr fetching data from json", error);
      });
  }, []);
  return (
    <div className="login">
      {showSignup ? (
        <Sigin />
      ) : (
        <form className="form">
          <h3 className="titel"> {props.loginItem.titel} </h3>
          <input
            className="Input"
            type="email"
            placeholder={props.loginItem.email}
            required
            name="email"
          />
          <input
            className="Input"
            type="text"
            placeholder={props.loginItem.user}
            required
            name="user"
          />
          <input
            className="Input"
            type="password"
            placeholder={props.loginItem.pass}
            required
            name="pass"
          />
          <p
            onClick={() => {
              setShowSignup(true);
            }}
            id="Create"
          >
            {props.loginItem.p}
          </p>
          <input
            className="Input"
            id="Sub"
            type="submit"
            value={props.loginItem.sub}
          />
        </form>
      )}
    </div>
  );
};

export default Login;
