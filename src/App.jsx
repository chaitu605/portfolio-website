import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Footer from "./components/Footer/Footer";
import { toggleTheme } from "./reduxStore/slices/themeSlice";

function App() {
  const { themeName } = useSelector((state) => state.theme);

  console.log("them", themeName);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <div id="top" className={`${themeName} app`}>
        <Header />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
