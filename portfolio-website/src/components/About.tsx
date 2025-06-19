import Image from "next/image";
import headshot from "@/assets/images/headshot.jpg";

export default function About(){
    return (
        <div id="about" className="flex items-center gap-4">
            <Image src={headshot} alt="Headshot" className="max-w-32 h-auto"/>
            <div className="flex flex-col">
                <h1>ISABELLA MCLEAN</h1>
                <h3>MSci CS @ King’s College London </h3>
                <h3>Incoming SWE Intern @ Trainline | Prev. SWE Intern @ AMEX</h3>
            </div>
        </div>
    )
}