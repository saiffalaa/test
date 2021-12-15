import React from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/styles.css";
import Header from "./Components/Header";
import Video from "./Components/Video";
import AppsDesc from "./Components/AppsDesc";
import Apps from "./Components/Apps";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Video />
      <AppsDesc />
      <Apps />
      <Footer />
    </div>
  );
}

export default App;
