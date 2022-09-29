import { Routes, Route } from 'react-router-dom';
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Common from "./pages/Common";

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