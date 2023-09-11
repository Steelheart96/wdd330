import { Route, Routes, Outlet } from "react-router-dom";
import React from "react";

import Navigation from "./routes/navigation/navigation.component";
import Header from "./routes/header/Header.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";

function App() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <Header />
                    <Navigation />
                    <Outlet />
                </>
            } >
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
            </Route>

        </Routes>
    )
}

export default App;