import Navbar from "./components/navbar/Navbar";
import {useTheme} from './helpers/useTheme'
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import { Routes ,Route } from 'react-router-dom';



function App() {
  const {changeTheme} = useTheme()
  return (
    <div className="App" style={{backgroundColor:changeTheme("background"),color:changeTheme("text")}}>
        <Navbar />

          <Routes>
            <Route exact path='/find-country' element={<Home/>}/>
            <Route exact path="/find-country/:countryName" element={<Details/>} />
          </Routes>
      
      </div>
  )
}

export default App;