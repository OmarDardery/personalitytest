"use client";
import { useState } from "react";
import Link from "next/link";
import "./header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <menu style={menuOpen ? { transform: "translateX(0)" } : {}}></menu>
            <div className={`cursor-pointer bg-black fixed top-0 w-full z-50 h-full transition-all duration-300 ease-in-out ${menuOpen ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)}></div>
            <div className="bg-gray-800 text-white p-4 h-[12vh] flex fixed items-center justify-between text-center top-0 w-full z-200">
                <div className="hamburger">
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={menuOpen}
                        onChange={e => setMenuOpen(e.target.checked)}
                    />
                    <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                        <path className="lineTop line" strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 11L44 11"></path>
                        <path strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 24H43" className="lineMid line"></path>
                        <path strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 37H43" className="lineBottom line"></path>
                    </svg>
                </div>
                <Link href={"/"}>
                    <h1 className="text-3xl font-bold w-fit cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        TypologyDen
                    </h1>
                </Link>
            </div>
            <div className="h-[12vh]"></div>
        </>
    );
}