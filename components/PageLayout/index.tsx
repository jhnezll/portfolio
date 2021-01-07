import {ReactElement, useContext, useEffect, useRef} from "react";
import SessionContext from "../../util/SessionContext";
import Button from "../forms/Button";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import Head from "next/head";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "./use-dimensions";
import {Navigation} from "./Navigation";
import {MenuToggle} from "./MenuToggle";
import * as React from "react";

interface Props {
    children: ReactElement;
    privateRoute?: boolean;
    redirectPath?: string;
    content?: any
    title: string;
}

const RedirectHome = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return <></>
}

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const PageLayout: React.FC<Props> = ({children, privateRoute, title, redirectPath}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    if (privateRoute && !isAuthenticated) return <RedirectHome/>

    function signOut() {
        fb.auth().signOut()
            .then(() => router.push('/'))
    }


    return <div>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <div className="w-full">
            <div className="h-2 bg-black"/>
            <div className="flex justify-between py-2.5 px-4 shadow-md items-center bg-white">
                <a href="/"
                   className="flex justify-between items-center font-medium text-2xl focus:underline truncate">
                    John Ezell
                </a>
                <div className="items-center">
                    {/*Right Side*/}
                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                        className="nav"
                    >
                        <motion.div className="background" variants={sidebar} />
                        <Navigation/>
                        <MenuToggle toggle={() => toggleOpen()} />
                    </motion.div>
                </div>

            </div>
        </div>


        {children}
    </div>


}

export default PageLayout