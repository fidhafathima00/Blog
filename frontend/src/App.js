import './App.css';
import Navbar from './components/Navbar/Navbar';
import{
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import addBlog from './pages/addBlog';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar /> 
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/add_Blog' element={<addBlog/>}/>


    </Routes>
    
    
    
    </BrowserRouter>
     </div>
  );
}

export default App;
