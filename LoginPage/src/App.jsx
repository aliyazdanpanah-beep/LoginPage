import "./App.css";
import Image from "./components/image/image";
import Home from "./page/Home/home";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="contaner">
      <Image/>
      <Home/>
    </div>
  );
}

export default App;
