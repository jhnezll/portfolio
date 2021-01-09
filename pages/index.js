import React from "react";
import PageLayout from "../components/PageLayout";
import {MenuToggle} from "../components/PageLayout/MenuToggle";
import {useCycle} from "framer-motion";
import {useRouter} from "next/router";




export default function Home() {
    const router = useRouter()


    return (
        <PageLayout title="Hi, I'm John Ezell">
            <div className="h-screen flex items-center px-12">
                <div className="max-w-screen-sm space-y-2">
                    {/*Text Block*/}
                    <div>
                        <h1 className="hidden md:block text-xl font-light tracking-widest">JOHN EZELL</h1>
                        <h1 className="text-2xl md:text-6xl font-medium leading-tight">An aspiring software engineer and designer</h1>
                        <p className="text-lg md:text-xl text-gray-800">
                            I am a team-player with a passion for programming and user-centric design who seeks
                            opportunities to develop practical skills in the software engineering field.
                        </p>
                    </div>
                    {/*Button Block*/}
                    <div>
                        <button className="text-sm md:text-xl button mt-4 focus:outline-none" onClick={() => router.push("/contact")}>Contact Me</button>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
