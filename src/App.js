import { Routes, Route } from 'react-router-dom';
import React,{Suspense} from 'react'
import Navbar from "./components/navbar/Navbar";

const Home = React.lazy(()=>import('./pages/home/Home'))
const Region = React.lazy(() => import('./components/region/Region'));
const Details = React.lazy(() => import('./pages/details/Details'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Suspense fallback='<h4>loading...</h4>'><Home/></Suspense>} />
          <Route path="/region/:region" element={<Suspense fallback='<h4>loading...</h4>'><Region/></Suspense>} />
          <Route path="/name/:countryName" element={<Suspense fallback='<h4>loading...</h4>'><Details/></Suspense>} />
      </Routes>
    </>
  )
}

export default App;