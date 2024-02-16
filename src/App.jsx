import React from "react";
import Routing from "./Components/Routing";
import Navbar from "./Components/Navbar";
import Responsive from "./Components/Responsive";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
