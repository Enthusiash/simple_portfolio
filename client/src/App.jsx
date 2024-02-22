import React,{ useState } from 'react'

// FOR ROUTING //
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS FOR ROUTING //
import Navbar from './components/navbar'
import Routing from './components/routing'
import Footer from './components/footer'


const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
           <div className='main'>
             <Routing />
            </div>
            {/* <ScrollToTopButton /> */}
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App