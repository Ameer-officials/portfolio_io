import React from 'react'
import Home from "./Components/Home";
import Work from "./Components/work/Work";
import Footer from "./Components/footer/Footer";
import Header from './Components/header/Header';

const Main = () => {
  return (
    <div className='main'>
       <Header />
       <Home />
       <Work />
       <Footer />
    </div>
  )
}

export default Main;
