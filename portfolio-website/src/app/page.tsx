"use client";
import { Carousel } from "@/components/ui/carousel";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { timelineData } from "@/assets/data/timelineData";
import { skills } from "@/assets/data/skills";
import { slideData } from "@/assets/data/slideData";
import  NavBar  from "@/components/NavBar";
import  About  from "@/components/About";
import  Contact  from "@/components/Contact";
import React from "react";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <NavBar/>
            <About/>
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
            <Contact/>
        </div>
    )
}