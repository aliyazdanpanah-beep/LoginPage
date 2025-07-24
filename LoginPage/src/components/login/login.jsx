import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <input type="text" placeholder="Email" required name="email" />
        <input type="password" placeholder="Password" required name="pass" />
      </form>
    </div>
  )
}

export default Login