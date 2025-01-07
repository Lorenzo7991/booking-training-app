import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';


function RoomCard({ room }) {
    return (
        <div className="card mx-auto md:max-w rounded overflow-hidden shadow-lg m-4 flex flex-col h-full">
            <div className="relative w-full h-64">
                <Image className="object-cover w-full h-full" src={`/images/rooms/${room.image}`} alt={room.name} layout="fill" />
            </div>
            <div className="main-card px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{room.name}</div>
                <p className="text-gray-700 text-base">{room.description}</p>
            </div>
            <div className="pills-card px-6 pt-4 pb-2 flex-grow">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.capacity} persone</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.square_meters} metri</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">€ {room.price_per_hour}/h</span>
            </div>
            <div className="footer-card px-6 pt-4 pb-2 mt-auto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full text-center inline-flex items-center justify-center">
                    <FaEye className="mr-2" />
                    Vedi Stanza
                </button>
            </div>
        </div>
    );
}

export default RoomCard;
