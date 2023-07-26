import { Routes , Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import GuruPage from './pages/GuruPage/GuruPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return ( <>
  <Navbar></Navbar>
  <Routes>
    
    <Route path='/' element = {<div className="App"><Homepage /></div>}></Route>
    <Route path='/guru' element = {<GuruPage></GuruPage>}></Route>
    
    </Routes>
    </>
  );
}

export default App;
