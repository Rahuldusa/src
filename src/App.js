import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helloworld from './Helloworld';

function App() {
  return (
    <Router>
            <div>
              
                <Routes>
                   
                   
                    <Route path="/" exact element={<Helloworld/>} />
                
          
                </Routes>
               
            </div>
        </Router>
  );
}

export default App;
