import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

// Componente Header
const Header = () => {
    return (
        <>
            {/* Barra di navigazione */}
            <nav className="bg-gray-800 p-4 shadow-md shadow-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <img src="@/assets/img/" alt="Logo" className="text-white font-bold text-xl" />
                        {/* Link di navigazione visibili desktop */}
                        <div className="ml-10 space-x-4 hidden sm:flex">
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Rooms</a>
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Booking</a>
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Add Room</a>
                        </div>
                    </div>
                    {/* Link di autenticazione */}
                    <div className="space-x-4 flex items-center">
                        <FaUserCircle className="text-gray-300 hover:text-white" size={24} />
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Login</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Register</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">MyRooms</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Sign Out</a>
                    </div>
                </div>
            </nav>
            {/* Link di navigazione visibili mobile first */}
            <div className="sm:hidden bg-gray-800 p-4">
                <div className="space-y-2">
                    <a href="#" className="block text-xs text-gray-300 hover:text-white">Rooms</a>
                    <a href="#" className="block text-xs text-gray-300 hover:text-white">Booking</a>
                    <a href="#" className="block text-xs text-gray-300 hover:text-white">Add Room</a>
                </div>
            </div>
        </>
    )
}

export default Header