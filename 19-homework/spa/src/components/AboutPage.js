
import React from "react";
import { useLocation } from "react-router-dom";
import Post from "./Post";
import "./Post.css";
import Header from "./Header";

export default function AboutPage() {
    const { pathname } = useLocation();

    return (
        <div>
            <Header url={pathname} />

            <Post />
        </div>
    );
}