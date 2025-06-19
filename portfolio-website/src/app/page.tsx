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
import AmexPhoto from "@/assets/images/AmexPhoto.jpg";
import AmexPhoto2 from "@/assets/images/AmexPhoto2.jpg";
import Arduino from "@/assets/images/Arduino.jpg";
import Lego from "@/assets/images/Lego.jpg";
import RiverView from "@/assets/images/RiverView.jpg";
import StrandViewIndoors from "@/assets/images/StrandViewIndoors.jpg";
import StrandViewOutdoors from "@/assets/images/StrandViewOutdoors.jpg";
import ProofIt from "@/assets/images/ProofIt.png";
import PolyGT from "@/assets/images/PolyGT.png";
import { Carousel } from "@/components/ui/carousel";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


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
        button: "View project post",
        src: Lego,
        link:"https://www.linkedin.com/posts/isabella-f-m_teamamex-journi-internship-activity-7319099987143897088-v26N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSEhX8BnQdletYuV5UHTQERpeezEQdcBfc",
        },
        {
        title: "ProofIt",
        button: "View project",
        src: ProofIt,
        link: "https://proofit.uk/",
        },
        {
        title: "PolyGT",
        button: "View project",
        src: PolyGT,
        link:"https://polygtwebsite.vercel.app/",
        },
        {
        title: "Pantry Tracker",
        button: "View project",
        src: PantryTracker,
        link: "https://pantry-tracker-three.vercel.app/",
        },
        {
        title: "Steganography Project",
        button: "View project",
        src: Steganography,
        link:"https://github.com/Isabella-Mclean/steganographyTool",
        },
    ];
    const timelineData = [
        {
            title: "March 2025 - April 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Software engineering internship at American Express
                    </p>
                    <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 grid grid-cols-2">
                        <ul className="list-disc list-inside space-y-2 space-x-3">
                            <li>Worked on a project for 3 weeks, in a team of 5, designing and developing a new sidebar for
                                one of AMEX’s agent-facing systems</li>
                            <li>Designed, pitched, and implemented the sidebar idea</li>
                            <li>Built the frontend using React, interacting with APIs for dynamic content</li>
                            <li>Completed the base task, and all three extension goals, allowing agents to provide
                                feedback and dynamically alerting these agents
                            </li>
                            <li>Achieved 100% test coverage</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">

                            <li>Followed strict business guidelines (AMEX styling, icons, colour schemes)</li>
                            <li>Collaborated using Git and contributed to one of their core codebases, with our code
                                soon going into production
                            </li>
                            <li>Presented the final sidebar to the product owner, the wider intern cohort, an array
                                of other engineers and employees at AMEX</li>
                            <li>Graduated from the Journi accelerator program</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={AmexPhoto2}
                            alt="Photo at AMEX"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={AmexPhoto}
                            alt="Photo at AMEX"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={Lego}
                            alt="Lego"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "January 2025 - April 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Software engineering accelerator programme participant with Journi.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        I attended weekly sessions,
                        from learning how to master coding interviews, a recap on the Agile development process, to
                        Imposter syndrome and building confidence in the workplace
                    </p>
                </div>
            ),
        },
        {
            title: "October 2024 - May 2025",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Mentored students through the Debate Mate programme
                    </p>
                    <p className=" text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Involved:
                    </p>
                    <ul className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200
                    list-disc list-inside space-y-2">
                        <li>Planning lessons each week for a class of students, generally either 10 or 20</li>
                        <li>Coordinating with the school and Debate Mate team, as well as leading the other mentor
                            to ensure a smooth running of our service</li>
                        <li>Training to become a debate competition judge</li>
                        <li>Judging at varying level competitions throughout the year</li>
                        <li>Filling in for the head debate team when necessary</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "September 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Began studying Computer Science at King’s College London
                    </p>
                    <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 grid grid-cols-2">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Computer Systems</li>
                            <li>Database Systems</li>
                            <li>Data structures</li>
                            <li>Elementary Logic With Applications</li>
                            <li>Foundations of Computing 1</li>
                            <li>Introduction to Professional Practice</li>
                            <li>Introduction to Software Engineering</li>
                            <li>Programming Practice and Applications</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Foundations of Computing 2</li>
                            <li>Introduction to Artificial Intelligence</li>
                            <li>Introduction to Robotics</li>
                            <li>Operating Systems and Concurrency</li>
                            <li>Practical Experiences of Programming</li>
                            <li>Programming Language Design Paradigms</li>
                            <li>Software Engineering Group Project</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={Arduino}
                            alt="Arduino"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={RiverView}
                            alt="River view"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={StrandViewIndoors}
                            alt="View of the Strand campus"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={StrandViewOutdoors}
                            alt="View of the Strand campus"
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
                </div>
            ),
        },
    ];
    const skills = [
    {
        description: "Python, Java, SQL, Scala, C++, ROS, React.js ",
        title: "Programming languages",
    },
    {
        description: "TailwindCSS, Linux, Windows, MAC, Github, Jest",
        title: "Tools",
    },
    {
        description: "Project management, B1 German, Teamwork, Leadership, AGILE Workflows",
        title: "Non-technical",
    },
    ]

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
            <div id="skills" className="relative w-full max-w-8/10 overflow-clip">
                <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={skills}
                        direction="right"
                        speed="normal"
                    />
                </div>
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
                    <ul className="copyright mb-5">
                        <li>&copy; Isabella Mclean</li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}