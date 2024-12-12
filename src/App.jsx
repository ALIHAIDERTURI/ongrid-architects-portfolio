import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Ai from "./components/Ai/Ai";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import About from "./components/About/About";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <BrowserRouter>
            <ToastContainer position="top-center" reverseOrder={false} />
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ai" element={<Ai />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
