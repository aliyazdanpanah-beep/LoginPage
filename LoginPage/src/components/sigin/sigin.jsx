import "./signin.css";

const Sigin = () => {
  return (
    <div className="sigin">
      <form>
        <div className="wrapper">
          <input
            className="INP"
            type="text"
            placeholder="Firstname"
            required
            name="first"
          />
          <input
            className="INP"
            type="text"
            placeholder="Lastname"
            required
            name="last"
          />
        </div>
      </form>
    </div>
  );
};

export default Sigin;
