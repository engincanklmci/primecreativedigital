import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Gemini', image: '/logos/gemini-logo.png' },
    { name: 'Medora', image: '/logos/medora-logo.jpg' },
    { name: 'Varlik', image: '/logos/varlik-logo.png' },
    { name: 'Temp 1', image: '/logos/temp-1.jpg' },
    { name: 'Temp 2', image: '/logos/temp-2.jpg' },
    { name: 'Temp 3', image: '/logos/temp-3.jpg' },
    { name: 'Temp 4', image: '/logos/temp-4.jpg' },
    { name: 'Temp 5', image: '/logos/temp-5.jpg' },
];

const ClientLogos = () => {
    return (
        <div className="py-12 overflow-hidden bg-white border-y border-gray-100 relative">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />

            <div className="flex relative">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex flex-col items-center justify-center opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer mx-12">
                            <div className="h-32 w-48 flex items-center justify-center">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ClientLogos;
