import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Index from './pages/Index'
import New from './pages/New'
import Show from './pages/Show'
import Edit from './pages/Edit'

function App() {
  
  return(
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cats" element={<Index/>}/>
            <Route path="/cats/new" element={<New/>}/>
            <Route path="/cats/:index" element={<Show/>}/>
            <Route path="/cats/:index/edit" element={<Edit/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
