import React from "react";
import PageLayout from "../components/PageLayout";

export default function About() {
    return(
        <PageLayout title="Learn More About John">
            <div className="h-screen flex flex-col justify-center items-center px-12 space-y-4">
                <h1 className="text-gray-500 tracking-widest text-center">A SMALL SUMMARY OF MYSELF</h1>
                <p className="text-l md:text-3xl md:w-1/2 text-center">I’m John Ezell, a software engineer
                    who focuses on making the most elegant and powerful solutions. For me, programming is much more than
                    just the code! It's about telling a client's story through an enjoyable and meaningful experience.
                    I am constantly adapting and pushing my knowledge of computer science to the next level.
                    I specialize in web development and user interfaces.</p>
                <p className="text-sm md:text-xl md:w-1/2 text-center text-gray-500">
                    Since I was born, I have always excelled at the use of technology. Software engineering is all about creating
                    crafty, modern solutions, and that is rooted in who I am. In my spare time, I enjoy playing League
                    of Legends and weightlifting.
                </p>
            </div>
        </PageLayout>
    )
}