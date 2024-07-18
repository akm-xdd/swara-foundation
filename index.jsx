import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import Donate from './pages/Donate';
import { ToastContainer } from 'react-toastify';
import AdminPanel from './pages/AdminPanel';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-work" element={<h1>Here goes our work</h1>} />
          <Route path="media" element={<h1>Here goes media</h1>} />
          <Route path="donate"element={<Donate/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>);