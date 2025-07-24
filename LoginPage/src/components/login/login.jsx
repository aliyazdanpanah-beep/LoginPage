import { useState } from "react";
import Sigin from "../sigin/sigin";
import "./login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  // const HandelSignin = () => {
  //   return <Sigin />;
  // }
  return (
    <div className="login">
      {showSignup ? (
        <Sigin />
      ) : (
        <form className="form">
          <h3 className="titel">Login an accunt</h3>
          <input className="Input" type="email" placeholder="Email" required name="email" />
          <input className="Input" type="text" placeholder="Username" required name="user" />
          <input className="Input" type="password" placeholder="Password" required name="pass" />
          <p
            onClick={() => {
              setShowSignup(true);
            }}
            id="Create"
          >
            create an accunt ?
          </p>
          <input className="Input" id="Sub" type="submit" value={"Login an accunt"} />
        </form>
      )}
    </div>
  );
};

export default Login;
