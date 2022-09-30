import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import CrazyLoader from './components/CrazyLoader';
const Details = React.lazy(() => import('./pages/Details'))
const Navbar = React.lazy(() => import('./components/Navbar'))
const Common = React.lazy(() => import('./pages/Common'))


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Suspense fallback={<CrazyLoader/>}><Common type='all'/></Suspense>} />
          <Route path="/region/:region" element={<Suspense fallback={<CrazyLoader/>}><Common type='region'/></Suspense>} />
          <Route path="/name/:countryName" element={<Suspense fallback={<CrazyLoader/>}><Details /></Suspense>} />
      </Routes>
      
    </>
  )
}

export default App;