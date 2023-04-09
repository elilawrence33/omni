import React from "react";
import { useState } from "react";

function PastConvo(props) { 
    console.log(props.text)

    return (
        <p>{props.text}</p>
    ); 
}

export default PastConvo; 