import React from "react";
import Footer from "./components/Footer";
import Modal from 'react-modal'
import "./App.css";
import Profile from "./components/Profile";
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App__container">
      <div className="main__content">
        <div>
          {/* Content body */}
          <Homepage/>
          {/* <Profile/> */}
        </div>
        <div className="footer__content">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
