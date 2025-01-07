import React from 'react';

// Componente Footer
const Footer = () => {
    // Recupero anno corrente
    const currentYear = new Date().getFullYear();

    return (

        // Contenitore footer
        <footer className="bg-gray-800 p-4 shadow-md shadow-black mt-10">
            <div className="container mx-auto text-center text-gray-300">
                {/* Visualizzazione dinamica anno corrente */}
                <p className="text-xs">&copy; {currentYear} BK - Rooms. Tutti i diritti riservati.</p>
                <div className="mt-2 space-x-4">
                    {/* Link's footer */}
                    <a href="#" className="text-xs text-gray-300 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-xs text-gray-300 hover:text-white">Termini di Servizio</a>
                    <a href="#" className="text-xs text-gray-300 hover:text-white">Contattaci</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
