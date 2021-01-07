import {ReactElement, useContext, useEffect} from "react";
import SessionContext from "../../util/SessionContext";
import Button from "../forms/Button";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import Head from "next/head";

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

const PageLayout: React.FC<Props> = ({children, privateRoute, title, redirectPath}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

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
        <div className="fixed w-full">
            <div className="h-2 bg-black"/>
            <div className="flex justify-between py-2.5 px-4 shadow-md items-center bg-white">
                <a href="/"
                   className="flex justify-between items-center font-medium text-2xl focus:underline truncate">
                    John Ezell
                </a>
                <div className="items-center">
                    {/*Right Side*/}
                </div>

            </div>
        </div>

        {children}
    </div>


}

export default PageLayout