import React from "react";

export default function Contact(){
    return (
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
    )
}