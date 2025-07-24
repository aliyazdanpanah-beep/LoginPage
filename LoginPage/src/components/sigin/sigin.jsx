import "./signin.css";

const Sigin = () => {
  return (
    <div className="sigin">
      <form>
        {/* <div className="wrapper">
          <input
            className="name"
            type="text"
            placeholder="Firstname"
            required
            name="first"
          />
          <input
            className="name"
            type="text"
            placeholder="Lastname"
            required
            name="last"
          />
        </div> */}

        <input className="INP" type="text" placeholder="Username" required name="user"/>
        <input className="INP" type="email" placeholder="Email" required name="email" />
        <input className="INP" type="password" placeholder="Password" required name="pass"/>
        <input className="pass" type="password" placeholder="Secend Password" required name="secpass" />
      </form>
    </div>
  );
};

export default Sigin;
