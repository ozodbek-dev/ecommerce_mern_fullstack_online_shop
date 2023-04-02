import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./containers/home";
import SignIn from "./containers/signin";
import SignUp from "./containers/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp />}/> 
      </Routes>
    </BrowserRouter>
  
  );
}

export default App; 
