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
import { Timeline } from "@/components/ui/timeline";

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
            link: "#experience",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Contact",
            link: "#contact",
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
    const timelineData = [
        {
            title: "April 2025 - May 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Software engineering internship at American Express
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                            alt="AMEX Logo"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "January 2025 - May 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Software engineering accelerator programme participant with Journi
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_zs9FhLGR_wg4SWefPcj_zXpQ_2_oC9mVw&s"
                            alt="Journi Logo"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "October 2024 - May 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Began mentoring students through the Debate Mate programme
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohoNElInG_R99HppQykDIpNbpILthgx9suw&s"
                            alt="Debate Mate Logo"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "September 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Started studying Computer Science at King’s College London
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.hdruk.ac.uk/wp-content/uploads/2024/04/2560px-Kings_College_London_logo.svg_.png"
                            alt="KCL Logo"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "August 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Graduated King Edward VI Handsworth School for Girls with 3 A Levels (AAA) in Maths, Further
                        Maths, Computer science
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://kingedwardvifoundation.co.uk/wp-content/uploads/2023/06/HSFG-Stacked-White-Text-1.png"
                            alt="School crest"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
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
            <div id="projects" className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slideData} />
            </div>
            <div id="experience" className="relative w-full overflow-clip">
                <Timeline data={timelineData} />
            </div>
            <div id="skills">
                <p>SKILLS</p>
            </div>
            <div id="contact">
                <footer >
                    <ul className="flex justify-center items-center gap-x-3 mb-5">
                        <li>
                            <a href="https://github.com/Isabella-Mclean" target="_blank">
                                <img
                                    src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
                                    alt="GitHub"
                                    height={30}
                                    width={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/isabella-f-m/" target="_blank">
                                <img
                                    src="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
                                    alt="LinkedIn"
                                    height={30}
                                    width={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:isabellamftr@gmail.com" >
                                <img
                                    src="https://img.icons8.com/?size=100&id=53388&format=png&color=FFFFFF"
                                    alt="Email"
                                    height={30}
                                    width={30}
                                />
                            </a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Isabella Mclean</li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}