import React from "react";
import {CircularProgress} from "@material-ui/core";

export default function Loading() {
    return(
        <div className="w-full items-center">
            <CircularProgress/>
        </div>
    )
}