import Login from "../../components/login/login";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Login")
      .then((res) => {
        setLoginData(res.data.data);    
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  }, []);

  return (
    <div>
      {loginData.map((loginItem) => (
        <Login key={loginItem.id} loginItem={loginItem} />
      ))}
    </div>
  );
};

export default Home;
