
import './App.css';
// import Navbar from './Components/Dashboard/Navbar';
// import Sidebar from './Components/Dashboard/Sidebar';
import { Loginpage } from './Components/Loginpage/Loginpage';
import SignUp from './Components/Loginpage/SignUp';
// import Feedpane from './Components/Dashboard/Feedpane'
// import Rightpane from './Components/Dashboard/Rightpane'
import { Routes, Route } from 'react-router-dom'
import { UserRegister } from './Components/Loginpage/UserRegister';
function App() {
  
  return (
    <div className="App">
      
      <Routes>
        
        <Route exact path="/" element={<Loginpage />} /> 
        <Route exact path="/signup" element={<SignUp />} />
        
        <Route exact path="/userregistration" element={<UserRegister />} />
        
        {/* other routes */}
      </Routes>
      
    
      {/* <Navbar />
      
      <div style={{backgroundColor:'#e9e9e9'}} clssName="flex">
      <Sidebar />
      </div>
      
      <Feedpane />
      
      
        <Rightpane /> */}
      
        
      
    </div>
  );
}

export default App;
