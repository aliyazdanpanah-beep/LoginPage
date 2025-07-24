import "./signin.css";

const Sigin = () => {
  return (
    <div className="sigin">
      <form>
        <h3 className="tittil">SignUp an account</h3>
        <input
          className="INP"
          type="text"
          placeholder="Username"
          required
          name="user"
        />
        <input
          className="INP"
          type="email"
          placeholder="Email"
          required
          name="email"
        />
        <input
          className="INP"
          type="password"
          placeholder="Password"
          required
          name="pass"
        />
        <input
          className="INP"
          type="password"
          placeholder="Secend Password"
          required
          name="secpass"
        />

        <input id="SUBMIT" type="submit" value={"SignUp an account"} />
      </form>
    </div>
  );
};

export default Sigin;
