import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import LoginPage from './auth/LoginPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/" />;
  }

  function PublicRoute({ children }) {
    console.log("PublicRoute rendered");
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/welcome" /> : children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/welcome" element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
