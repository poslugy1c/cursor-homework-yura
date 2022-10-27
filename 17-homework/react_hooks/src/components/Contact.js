import React from "react";
import maleImg from '../img/male.svg'
import femImg from '../img/female.svg'

const Contact = ({ firstName, lastName, phone, gender }) => {
    let sexImg;
    if (gender) {
        if (gender === 'male') {
            sexImg = maleImg;
        } if (gender === 'female') {
            sexImg = femImg;
        };
    };

    return (
        <div className="contact">
            <p><img src={sexImg} /> {lastName} {firstName}</p>
            <p className="phone">{phone}</p>
        </div>
    );
};

export default Contact;