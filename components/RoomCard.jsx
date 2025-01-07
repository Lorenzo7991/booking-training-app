import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

function RoomCard({ room }) {
    const truncateDescription = (description) => {
        return description.length > 50 ? description.substring(0, 50) + '...' : description;
    };

    return (
        <div className="card mx-auto md:max-w rounded overflow-hidden shadow-lg m-4 flex flex-col h-full">
            <div className="relative w-full h-64">
                <Image className="object-cover w-full h-full" src={`/images/rooms/${room.image}`} alt={room.name} layout="fill" />
            </div>
            <div className='main-card'>
                <div className="px-6 py-4 flex-grow">
                    <h1 className="font-bold text-xl mb-2">{room.name}</h1>
                    <p className="text-gray-700 text-sm">{truncateDescription(room.description)}</p>
                </div>
                <div className='services-card bg-gray-800 px-6 py-2'>
                <p className="text-white text-sm h-14">{room.amenities}</p>
                </div>
                <div className="pills-card px-6 pt-4 pb-2 flex-grow my-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.capacity} persone</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{room.square_meters} metri</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">€ {room.price_per_hour}/h</span>
                </div>
                <div className='availability bg-gray-200 px-6 py-2'>
                    <p className="text-gray-700 text-sm"><strong>Orari prenotazioni:</strong> {room.availability}</p>
                </div>
            </div>
            <div className="footer-card px-6 pt-4 pb-2 mt-auto">
                <Link href={`/rooms/${room.$id}`} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-full text-center inline-flex items-center justify-center">
                        <FaEye className="mr-2"/>
                        Vedi Stanza
                </Link>
            </div>
        </div>
    );
}

export default RoomCard;
