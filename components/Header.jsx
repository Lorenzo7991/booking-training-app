import React from 'react'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo-no-bg.png";
import { FaUserCircle, FaSignInAlt, FaSignOutAlt, FaHome, FaPlus } from 'react-icons/fa';


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
                            <Link href="#" className="relative group text-xs text-gray-300 hover:text-white">Stanze</Link>
                            <Link href="#" className="relative group text-xs text-gray-300 hover:text-white">Prenotazioni</Link>
                            <Link href="#" className="relative group text-xs text-gray-300 hover:text-white flex items-center gap-1">
                                <FaPlus className="text-gray-300" />
                                Stanza
                            </Link>
                        </div>
                    </div>
                    {/* Link di autenticazione con icone */}
                    <div className="space-x-4 flex items-center">
                        <Link href="#" className="relative group text-xs text-gray-300 hover:text-white flex items-center gap-1">
                            <FaSignInAlt className="text-gray-300" />
                            <span className="hidden lg:block">Accedi</span>
                            <div className=' xl:hidden'>
                                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-slate-700 rounded-md">
                                    Accedi
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="relative group text-xs text-gray-300 hover:text-white flex items-center gap-1">
                            <FaUserCircle className="text-gray-300" />
                            <span className="hidden lg:block">Registrati</span>
                            <div className=' xl:hidden'>
                                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-slate-700 rounded-md">
                                    Registrati
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="relative group text-xs text-gray-300 hover:text-white flex items-center gap-1">
                            <FaHome className="text-gray-300" />
                            <span className="hidden lg:block">Le Mie Stanze</span>
                            <div className=' xl:hidden'>
                                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-slate-700 rounded-md">
                                    Stanze
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="relative group text-xs text-gray-300 hover:text-white flex items-center gap-1">
                            <FaSignOutAlt className="text-gray-300" />
                            <span className="hidden lg:block">Esci</span>
                            <div className=' xl:hidden'>
                                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex px-2 py-1 text-xs text-white bg-slate-700 rounded-md">
                                    Esci
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </nav>
            {/* Link di navigazione visibili mobile first */}
            <div className="sm:hidden bg-gray-800 p-4">
                <div className="space-y-2">
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Stanze</Link>
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Prenotazioni</Link>
                    <Link href="#" className="block text-xs text-gray-300 hover:text-white">Aggiungi Stanza</Link>
                </div>
            </div>
        </>
    )
}

export default Header