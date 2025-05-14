"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from 'next/image';
import headshot from "@/assets/images/headshot.jpg";
import PantryTracker from "@/assets/images/PantryTracker.png";
import Steganography from "@/assets/images/Stego.png";
import ProofIt from "@/assets/images/ProofIt.png";
import PolyGT from "@/assets/images/PolyGT.png";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
    const navItems = [
        {
            name: "About Me",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Experience",
            link: "#Experience",
        },
        {
            name: "Skills",
            link: "#Skills",
        },
        {
            name: "Contact",
            link: "#Contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const slideData = [
        {
        title: "AMEX Intern Project",
        button: "Explore Component",
        src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        title: "ProofIt",
        button: "Explore Component",
        src: ProofIt,
        },
        {
        title: "PolyGT",
        button: "Explore Component",
        src: PolyGT,
        },
        {
        title: "Pantry Tracker",
        button: "Explore Component",
        src: PantryTracker,
        },
        {
        title: "Steganography Project",
        button: "Explore Component",
        src: Steganography,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <div className="relative w-full m-12">
                <Navbar>
                    {/* Desktop Navigation */}
                    <NavBody>
                        <NavItems items={navItems}/>
                    </NavBody>

                    {/* Mobile Navigation */}
                    <MobileNav>
                        <MobileNavHeader>
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </MobileNavHeader>

                        <MobileNavMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        >
                            {navItems.map((item, idx) => (
                                <a
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="relative text-neutral-600 dark:text-neutral-300"
                                >
                                    <span className="block">{item.name}</span>
                                </a>
                            ))}
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>
            </div>
            <div id="about" className="flex items-center gap-4">
                <Image src={headshot} alt="Headshot" className="max-w-32 h-auto"/>
                <div className="flex flex-col">
                    <h1>ISABELLA MCLEAN</h1>
                    <h3>MSci CS @ King’s College London </h3>
                    <h3>Incoming SWE Intern @ Trainline | Prev. SWE Intern @ AMEX</h3>
                </div>
            </div>
            <div className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slideData} />
            </div>
            <div>
                <p>EXPERIENCE</p>
            </div>
            <div>
                <p>SKILLS</p>
            </div>
            <div>
                <p>CONTACT</p>
            </div>
        </div>
    )
}