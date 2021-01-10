import React from "react";
import CheckIcon from '@material-ui/icons/Check';


export default function FormSubmitted() {

    const styles = {
        largeIcon: {
            width: 60,
            height: 60,
        },
    };

    return(
        <div className="flex-col flex items-center">
            <CheckIcon className="large-icon"/>
            <h1 className="text-2xl md:text-4xl font-bold text-center">Thanks for contacting me!</h1>
            <h1 className="text-l md:text-xl text-center">I will respond as soon as a I can.</h1>
        </div>
    )
}