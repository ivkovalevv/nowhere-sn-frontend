import { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [lightTheme, setLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem("lightTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (lightTheme) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }

    localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
  }, [lightTheme]);

  return (
    <BrowserRouter>
      <Header theme={lightTheme} />
      <div className="App">Hello, Nowhere sn!</div>
    </BrowserRouter>
  );
}

export default App;
