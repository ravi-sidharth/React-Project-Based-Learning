import {Link,Route,Routes} from 'react-router-dom'
import "./App.css";
import Home from "./Components/Home";
import User from "./Components/User"
import About from "./Components/About";
import UserDetails from './Components/UserDetails'

function App() {

  return (
    <>
      <div className="mb-10 text-3xl flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="user">User</Link>
        <Link to="/about">About</Link>
      </div>

      <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/user/:id" element={<UserDetails/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
