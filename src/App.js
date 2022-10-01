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
      <main>
        <Routes>
            <Route path='/' element={<Suspense fallback={<CrazyLoader/>}><Common API_URL='https://restcountries.com/v3.1/all'/></Suspense>} />
            <Route path="/region/africa" element={<Suspense fallback={<CrazyLoader/>}><Common API_URL = 'https://restcountries.com/v3.1/region/africa' /></Suspense>} />
            <Route path="/region/america" element={<Suspense fallback={<CrazyLoader/>}><Common API_URL = 'https://restcountries.com/v3.1/region/america' /></Suspense>} />
            <Route path="/region/oceania" element={<Suspense fallback={<CrazyLoader/>}><Common API_URL = 'https://restcountries.com/v3.1/region/oceania' /></Suspense>} />
            <Route path="/region/asia" element={<Suspense fallback={<CrazyLoader/>}><Common API_URL = 'https://restcountries.com/v3.1/region/asia' /></Suspense>} />
            <Route path="/name/:countryname" element={<Suspense fallback={<CrazyLoader/>}><Details /></Suspense>} />
        </Routes>
      </main>
      
    </>
  )
}

export default App;