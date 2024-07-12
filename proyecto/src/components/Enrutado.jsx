import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"
import Posts from "../pages/Posts"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Header from "./Header"

export const Enrutado = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route path="/posts" element={ <Posts /> } />
            <Route path="/login" element={ <SignIn /> } />
            <Route path="/register" element={ <SignUp /> } />
        </Routes>
    </BrowserRouter>
  )
}
