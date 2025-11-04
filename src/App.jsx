import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './auth/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  )
}

export default App
