import type {AppProps} from 'next/app'
import '../styles/tailwind.css'
import {useEffect, useState} from "react";
import fb from "../util/firebase-config";
import SessionContext from "../util/SessionContext";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({Component, pageProps}: AppProps) {

    const [sessionLoaded, toggleSessionLoaded] = useState(false)
    const [isAuthenticated, toggleAuthenticated] = useState(false)
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUserProfile(user)
                toggleAuthenticated(true)
                toggleSessionLoaded(true)
            } else {
                // User is signed out.
                toggleAuthenticated(false)
                setUserProfile({})
                toggleSessionLoaded(true)
            }
        });
    }, [])

    // Waits until the session is loaded before loading the page
    if (!sessionLoaded) return null

    return (
        <SessionContext.Provider value={{isAuthenticated, userProfile}}>
            <Head>
                <title>John Ezell</title>
            </Head>
            <motion.div initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
            }}>
                <Component {...pageProps} />
            </motion.div>
        </SessionContext.Provider>
    )
}

export default MyApp
