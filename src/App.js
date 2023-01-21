import React from "react";
import "./App.css";
//import Anmol1 from "./images/Anmol1"
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <main className="main">
        <section className="main__section">
          <Header />
          <About />
          <Interest />
          <Footer />
        </section>
      </main>
    </>
  );
}
