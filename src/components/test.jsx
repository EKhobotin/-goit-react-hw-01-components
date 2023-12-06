import React from "react";
import "./test.css"

const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;



export const Paragraph = ({ color, name }) => {
    
    return (
        <p className="para test">React this is bad {color} {name}           
        </p> 
           

    )
}

export const Ul = () => {
    return (
        <ul>
    <li>abc</li>
    <li>xyz</li>
            </ul>)
}
