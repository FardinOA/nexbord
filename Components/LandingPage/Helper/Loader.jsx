import { motion } from "framer-motion";
import React from "react";

const Loader = ({ size, text }) => {
    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 4 }}
            className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden w-screen h-screen z-[40] flex flex-col justify-center items-center bg-blue-900 text-blue-100  "
        >
            <div className="custom-loader h-screen">
                <h2
                    className={`${
                        size ? `text-${size}xl` : "text-6xl md:text-8xl "
                    }`}
                >{`${text ? text : "Lavish"}`}</h2>
                <h2
                    className={`${
                        size ? `text-${size}xl` : "text-6xl md:text-8xl"
                    }`}
                >{`${text ? text : "Lavish"}`}</h2>
            </div>
        </motion.div>
    );
};

export default Loader;
