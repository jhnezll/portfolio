import * as React from "react";
import { motion } from "framer-motion";
import {MenuItem} from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul className="text-4xl cursor-pointer overflow-hidden z-20" variants={variants}>
        <a href="/"><MenuItem text="Work"/></a>
        <a href="/about"><MenuItem text="About"/></a>
        <a href="/contact"><MenuItem text="Contact"/></a>
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
