import Navbar from "./components/navbar/Navbar";
import {useTheme} from './helpers/useTheme'
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';



function App() {
  const {changeTheme} = useTheme()
  return (
    <div className="App" style={{backgroundColor:changeTheme("background"),color:changeTheme("text")}}>
        <Navbar />

          <Router>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path="/:countryName" element={<Details/>} />
            </Routes>
          </Router>
      
      </div>
  )
}

export default App;