import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Offers from "./pages/Offers"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/sign-in" element={<Signin/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/offers" element={<Offers/>}/>
          </Routes>
        </Router>
      </>

    </div>
  );
}

export default App;
