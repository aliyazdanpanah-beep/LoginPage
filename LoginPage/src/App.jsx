import "./App.css";
import Image from "./components/image/image";
import Login from "./components/login/login";
import Home from "./page/Home/home";

function App() {
  return (
    <div className="contaner">
      <Image/>
      <Home/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
