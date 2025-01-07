import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="@/assets/img/" alt="Logo" className="text-white font-bold text-xl" />
                        <div className="ml-10 space-x-4">
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Rooms</a>
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Booking</a>
                            <a href="#" className="text-xs text-gray-300 hover:text-white">Add Room</a>
                        </div>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Login</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Register</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">MyRooms</a>
                        <a href="#" className="text-xs text-gray-300 hover:text-white">Sign Out</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
