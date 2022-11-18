import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import ScreenContainerComponent from "./common/ScreenContainerComponent";
import {getProjectsListByName} from "../info/ProjectsList";
import ToolbarComponent from "./common/ToolbarComponent";
import FooterComponent from "./common/FooterComponent";
import {DESCRIPTION_COLOR, PRIMARY_COLOR} from "../info/ColorUtils";
import ReactGA from "react-ga";

export default function ProjectViewPageComponent() {
    const componentUrl = window.location.href;
    const splittedUrl = componentUrl.split('/');
    const projectName = splittedUrl[splittedUrl.length - 1].replace('%20', ' ');
    const projectEntity = getProjectsListByName(projectName)[0];
    const history = useHistory();
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <ScreenContainerComponent title={"Projects - " + projectEntity.name}>
            <ToolbarComponent />

            <main style={{ minHeight: "40vh" }}>
                <section className={"relative w-screen"} style={{ height: "80vh" }}>
                    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 text-black">
                        <div className="Text flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
                            <div className={"p-10 mb-20 lg:pl-20 sm:p-5 md:p-5"}>
                                <p className="md:text-4 lg:text-5x1 lg:text-left">{projectEntity.createdAt}</p>
                                <h2 className="text-3xl md:text-4 lg:text-5x1 lg:text-left mb-2" style={{color: PRIMARY_COLOR}}>{projectEntity.name}</h2>
                                <p className={"text-xs sm:text-base max-w-prose text-left lg:text-left mb-6 lg:text-md"} style={{ color: DESCRIPTION_COLOR }}>{projectEntity.longDescription}</p>
                                <p className={"text-md mb-2"} style={{color: PRIMARY_COLOR}}>Project Tags</p>
                                <div className={"grid grid-rows-3 gap-x-1 gap-y-2 grid-cols-2 max-w-xs"}>
                                    {projectEntity.tags.map((item) => <p>{item}</p>)}
                                </div>
                                {projectEntity.link ? <div className="flex justify-left flex-wrap pt-10">
                                    <a href={projectEntity.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={"rounded-full text-white bg-black transition duration=300 ease-in-out flex items-start animate-bounce p-5 text-xs"}>
                                        Project Link
                                    </a>
                                </div> : null}
                            </div>
                        </div>
                        <div className="flex justify-center flex-2 md:p-5 lg:p-5">
                            <img loading="lazy" className={"w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-xl"} src={projectEntity.imageProject} alt={projectEntity.name} />
                        </div>
                    </div>
                </section>
            </main>

            <div className={"mb-5 md:hidden lg:hidden xl:hidden"} />
            {projectEntity.images ? <div className={"p-20 md:w-4/5 lg:w-4/5"}>
                <h2 className="text-center text-3xl md:text-4 lg:text-5x1 lg:text-left mb-2" style={{color: "black"}}>Project Images</h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-10 items-center mt-10"}>
                    {projectEntity.images.map((item) => (
                        <img className={"sm:w-3/4 sm:h-3/4 md:w-full md:h-full md:p-5"} alt={projectEntity.name} src={item} />
                    ))}
                </div>
            </div> : null}
            <FooterComponent />
        </ScreenContainerComponent>
    );
}
