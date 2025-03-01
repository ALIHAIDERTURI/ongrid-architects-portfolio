import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Services from "./components/Services/Services";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
    <div className=" ">
            <BrowserRouter>
            <ToastContainer position="top-center" reverseOrder={false} />
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/whoweare" element={<WhoWeAre />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
