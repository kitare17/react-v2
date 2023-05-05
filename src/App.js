import logo from './logo.svg';
import './App.css';
import { Route ,Routes,Link } from 'react-router-dom';
import Homepage from "./Homepage"
import Contact from "./Contact"
import Example from './Condition-example';
function App() {
  return (
    <div className="App">
 <div className="App">
        <nav>
              <Link to="/" className='nav-item'>HomePage</Link>
              <Link to="/contact" className='nav-item'>Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}> 
          </Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      <Example></Example>
      
    </div>
   
    </div>
  );
}

export default App;
