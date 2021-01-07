import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 10,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

//Easy to make a gradient for in the future
const colors = ["#000", "#000", "#000", "#000", "#000"];

export const MenuItem = ({text}) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <h1 className="w-full text-center">{text}</h1>
        </motion.li>
    );
};
