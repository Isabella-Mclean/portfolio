import AmexPhoto from "@/assets/images/AmexPhoto.jpg";
import AmexPhoto2 from "@/assets/images/AmexPhoto2.jpg";
import AugustusBanner from "@/assets/images/AugustusBanner.jpg";
import Arduino from "@/assets/images/Arduino.jpg";
import Lego from "@/assets/images/Lego.jpg";
import RiverView from "@/assets/images/RiverView.jpg";
import StrandViewIndoors from "@/assets/images/StrandViewIndoors.jpg";
import StrandViewOutdoors from "@/assets/images/StrandViewOutdoors.jpg";
import Image from 'next/image';
import React from 'react';

export const timelineData = [
    {
        title: "June 2026",
        content: (
            <div>
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                    Graduate Software Engineer at Augustus (Typescript / React / Git / SQL / Temporal / Grafana / AI tooling)
                </p>
                <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 grid grid-cols-2">
                    <ul className="list-disc list-inside space-y-2 space-x-3">
                        <h4 className="mb-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200">
                            Billing platform
                        </h4>
                        <li>Built an automated billing system that generates a billing event per transaction (~580k events/week) and handles monthly invoice payments to and from client accounts, meeting strict financial and audit requirements.</li>
                        <li>Automated invoicing cut time to payment from 1 week to less than 2 days on average, with no client effort required.</li>
                        <li>Tightened validation and enforced strict rules across all billing processes to prevent repeat incidents, reducing the failure rate from 1.41% to 0.02%.</li>
                        <li>Improved logging and alerting system-wide so incidents can be acted on and remediated as soon as an alert fires; built a dashboard giving visibility into billing events and invoicing.</li>
                        <li>Built legacy-code cleanup and decoupling into the development process to reduce tech debt.</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <h4 className="mb-3 text-sm font-medium text-neutral-800 md:text-base dark:text-neutral-200">
                            Admin dashboard & payment operations
                        </h4>
                        <li>Delivered the new admin dashboard that replaced our legacy system with little disruption, so compliance-critical flows kept working with no coverage gap during the switch-over.</li>
                        <li>Independently led a fund-seizure project within payment operations, owning scoping, planning and building, replacing hacky tooling with a smoother dashboard flow.</li>
                        <li>Ramped up across four areas in three months (transaction monitoring, admin API, suspense funds, accounts and billing), using AI tooling to navigate unfamiliar code quickly.</li>
                    </ul>
                </div>
                <div className="relative">
                    <Image
                        src={AugustusBanner}
                        alt="Augustus Banner"
                        className="h-auto w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "July 2025 - September 2025",
        content: (
            <div>
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                    Software engineering internship at Trainline  (.NET / C# / React / Git / Agile workflow / SQL)
                </p>
                <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 grid grid-cols-2">
                    <ul className="list-disc list-inside space-y-2 space-x-3">
                        <li>Collaborating with the existing team to write tickets, develop code, attend scrum ceremonies
                            , liaise with the product and design team for new features on a B2B platform</li>
                        <li>Full-stack activities include coding, testing and deploying backend code for integration
                            with frontend repositories
                        </li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                       <li>Working with a microservice infrastructure to develop small components within the larger
                           system, such as updating endpoints and REST API responses to support new features, as well
                           as updating the frontend to handle these changes</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "March 2025 - April 2025",
        content: (
            <div>
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                    Software engineering internship at American Express (React / Git / API handling)
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
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
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
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
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
        title: "September 2023-June 2026",
        content: (
            <div>
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                   First class BSc (Honours) Computer Science at King’s College London
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
                <p className="mb-8 text-base semibold text-neutral-800 md:text-xl dark:text-neutral-200">
                    Graduated King Edward VI Handsworth School for Girls with 3 A Levels (AAA) in Maths, Further
                    Maths, Computer science
                </p>
            </div>
        ),
    },
];