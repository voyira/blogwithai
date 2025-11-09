import React from 'react';
import {Outlet} from "react-router-dom";
import {assets} from "../../assets/assets.js";
import Sidebar from "../../components/admin/Sidebar.jsx";
import {useAppContext} from "../../context/AppContext.jsx";

const Layout = () => {
    const {axios, setToken, navigate} = useAppContext()
    const logout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common["Authorization"] = null;
        setToken(null);
        navigate('/');
    };
    return (
        <>
            <div className='flex justify-between items-center py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
                <img src={assets.logo} alt=''
                     className='w-32 sm:w-40 cursor-pointer'
                     onClick={() => navigate('/')}/>
                <button onClick={logout}
                        className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>
                    Logout
                </button>
            </div>
            <div className='flex h-[calc(100vh-70px)] bg-gray-50'>
                <aside className='w-20 md:w-64 border-r border-gray-200 bg-white'>
                    <Sidebar/>
                </aside>
                <main className='flex-1 overflow-y-auto p-5 md:p-10'>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}
export default Layout;
