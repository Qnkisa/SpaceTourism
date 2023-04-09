import { useState ,useEffect} from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Header from './components/Header'
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"

function App() {
  const [tabClickCount, setTabClickCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        setTabClickCount((prevCount) => prevCount + 1);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (tabClickCount === 2) {
      setTimeout(() => {
        setTabClickCount(0);
      }, 2500);
    }
  }, [tabClickCount]);

  return (
    <>
    <Router>
      <div className="website-div">
        <Header/>
        {tabClickCount === 2 && (
            <div className="yanislav-div">
              <div className="yanislav-div-helper"></div>
              <div className="yanislav-div-content">
                <p>
                  This website was made by{' '}
                  <a href="https://github.com/Qnkisa" target="_blank">
                    Yanislav Angelov
                  </a>
                </p>
              </div>
            </div>
          )}
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/destination' element={<Destination/>}></Route>
          <Route path='/crew' element={<Crew/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
