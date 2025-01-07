import React from 'react'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo-no-bg.png";
import { FaUserCircle, FaSignInAlt, FaSignOutAlt, FaHome, FaBars } from 'react-icons/fa';

// Componente Header
const Header = () => {
    return (
        <>
            {/* Barra di navigazione */}
            <nav className="bg-gray-800 p-4 shadow-md shadow-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link href='#'><Image src={logo} alt="Logo" priority={true} className="text-white max-w-20" /></Link>
                        <h1 className="text-white font-bold text-lg ml-2 hidden md:block">BK - Rooms</h1>
                        {/* Link di navigazione visibili desktop */}
                        <div className="ml-10 space-x-4 hidden sm:flex">
                            <Link href="#" className="text-xs text-gray-300 hover:text-white">Rooms</Link>
                            <Link href="#" className="text-xs text-gray-300 hover:text-white">Booking</Link>
                            <Link href="#" className="text-xs text-gray-300 hover:text-white">Add Room</Link>
                        </div>
                    </div>
                    {/* Link di autenticazione con icone */}
                    <div className="space-x-4 flex items-center">
                        <Link href="#" className="text-xs text-gray-300 hover:text-white flex items-center gap-1">
                        <FaSignInAlt className="text-gray-300"/>
                        Login
                        </Link>
                        <Link href="#" className="text-xs text-gray-300 hover:text-white flex items-center gap-1">
                        <FaUserCircle className="text-gray-300"/>
                        Register
                        </Link>
                        <Link href="#" className="text-xs text-gray-300 hover:text-white flex items-center gap-1">
                        <FaHome className="text-gray-300"/>
                        MyRooms
                        </Link>
                        <Link href="#" className="text-xs text-gray-300 hover:text-white flex items-center gap-1">
                        <FaSignOutAlt className="text-gray-300"/>
                        Sign Out
                        </Link>
                    </div>
                </div>
            </nav>
            {/* Link di navigazione visibili mobile first */}
            <div className="sm:hidden bg-gray-800 p-4">
                <div className="space-y-2">
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Rooms</Link>
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Booking</Link>
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Add Room</Link>
                </div>
            </div>
        </>
    )
}

export default Header