import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Walk from './pages/Walk'
import Drink from './pages/Drink'
import Header from './components/Header'
import Run from './pages/Run'



function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      
        
      <Route path='/' element={<Home/>}/>
      <Route path='/run' element={<Run/>}/>

      <Route path='/walk' element={<Walk/>}/>
      <Route path='/drink' element={<Drink/>}/>
    
    </Routes>
  </Router>
  )
}

export default App
