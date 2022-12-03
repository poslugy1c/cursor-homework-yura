import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./nav";

export default function Header() {
    const { pathname } = useLocation();
    const history = useNavigate();
    return (
        <div className="header">
            <header>
                <h1>LOGO</h1>
                <Nav />
                {pathname === "/users" ? (
                    <button>Add user</button>
                ) : (
                    <div className="empty"></div>
                )}
            </header>
            <div className="btn">
                <button
                    onClick={() => {
                        history(-1);
                    }}
                >
                    &#8592;
                </button>
                <button
                    onClick={() => {
                        history(-1);
                    }}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}