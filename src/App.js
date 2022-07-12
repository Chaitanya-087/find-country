import Navbar from "./components/navbar/Navbar";
import {useTheme} from './helpers/useTheme'
import Home from "./pages/home/Home";

function App() {
  const {changeTheme} = useTheme()
  return (
    <div className="App" style={{backgroundColor:changeTheme("background"),color:changeTheme("text")}}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;