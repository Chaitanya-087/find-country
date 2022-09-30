import { Routes, Route } from 'react-router-dom';
import React from 'react';
const Details = React.lazy(() => import('./pages/Details'))
const Navbar = React.lazy(() => import('./components/Navbar'))
const Common = React.lazy(() => import('./pages/Common'))


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Common type='all'/>} />
          <Route path="/region/:region" element={<Common type='region'/>} />
          <Route path="/name/:countryName" element={<Details />} />
      </Routes>
      
    </>
  )
}

export default App;