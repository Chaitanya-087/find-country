import { Routes, Route } from 'react-router-dom';
import Details from "./pages/details/Details";
import Region from './components/region/Region';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/region/:region" element={<Region />} />
          <Route path="/name/:countryName" element={<Details />} />
      </Routes>
    </>
  )
}

export default App;