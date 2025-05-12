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

    return (
    <div>
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavItems items={navItems} />
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
        <div>
            <p>ABOUT ME</p>
        </div>
        <div>
            <p>PROJECTS</p>
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
  );
}
