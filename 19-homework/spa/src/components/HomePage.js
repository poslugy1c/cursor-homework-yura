import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import mainPhoto from "../images/mainPhoto.jpg";

export default function HomePage() {
    const { pathname } = useLocation();
    return (
        <div>
            <Header url={pathname} />
            <section className="main">
                <img src={mainPhoto} className="mainPhoto"></img>
                <h1 className="mainText">
                    "У кожної нації свої хвороби. <br></br>У росії - невиліковна"{" "}
                    <br></br>Ліна Костенко
                </h1>
            </section>
        </div>
    );
}