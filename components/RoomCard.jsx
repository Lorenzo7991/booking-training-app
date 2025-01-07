import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';

function RoomCard({ room }) {
    return (
        <div className="card mx-auto max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col h-full">
            <Image className="w-full" src={`/images/${room.image}`} alt={room.name} width={400} height={300} />
            <div className="main-card px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{room.name}</div>
                <p className="text-gray-700 text-base">{room.description}</p>
            </div>
            <div className="pills-card px-6 pt-4 pb-2 flex-grow">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.capacity} people</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.square_feet} sqft</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${room.price_per_hour}/hr</span>
            </div>
            <div className="footer-card px-6 pt-4 pb-2 mt-auto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full text-center inline-flex items-center justify-center">
                    <FaEye className="mr-2" />
                    View Room
                </button>
            </div>
        </div>
    );
}

export default RoomCard;
