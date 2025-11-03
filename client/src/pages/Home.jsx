import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import BlogList from "../components/BlogList.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <BlogList/>
        </div>
    );
};

export default Home;