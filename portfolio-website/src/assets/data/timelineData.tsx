import AmexPhoto from "@/assets/images/AmexPhoto.jpg";
import AmexPhoto2 from "@/assets/images/AmexPhoto2.jpg";
import Arduino from "@/assets/images/Arduino.jpg";
import Lego from "@/assets/images/Lego.jpg";
import RiverView from "@/assets/images/RiverView.jpg";
import StrandViewIndoors from "@/assets/images/StrandViewIndoors.jpg";
import StrandViewOutdoors from "@/assets/images/StrandViewOutdoors.jpg";
import Image from 'next/image';

export const timelineData = [
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