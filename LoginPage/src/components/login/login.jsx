import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <h3 className="titel">Login an accunt</h3>
        <input type="email" placeholder="Email" required name="email" />
        <input type="text" placeholder="Username" required name="user"/>
        <input type="password" placeholder="Password" required name="pass" />
        <p id="Create">create an accunt ?</p>
        <input id="Sub" type="submit" value={"Login an accunt"} />
      </form>
    </div>
  )
}

export default Login