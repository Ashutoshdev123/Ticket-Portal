import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

import Navbar from './components/navbar.jsx'
import Header from './components/dashboard.jsx'

//import Counter from './components/counter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header />
   {/* <Counter /> */}

    {/* <App /> */}
  </StrictMode>
)
