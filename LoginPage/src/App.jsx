import "./App.css";
import Image from "./components/image/image";
import Navbar from "./components/nanbar/navbar";
import Home from "./page/Home/home";

function App() {
  return (
    <div className="contaner">
      <Navbar/>
      <Image/>
      <Home/>
    </div>
  );
}

export default App;
