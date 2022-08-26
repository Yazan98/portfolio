import {DESCRIPTION_COLOR, PRIMARY_COLOR} from "../../info/ColorUtils";
import React from "react";
import getFeaturedProjects from "../../info/FeaturedProjectsList";
import {Link} from "react-router-dom";

export default function FeaturedProjectsComponent() {
    return (
        <section className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
            <h2 className={"mt-10"} style={{ color: PRIMARY_COLOR }}>Featured Projects</h2>
            <p className="ProjectsDescription max-w-md">List of Featured Open Source Projects Built Until Now</p>
            <div className={"max-w-none md:max-w-5xl lg:max-w-5xl"}>
                <div className={"flex flex-1 justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start p-2"}>
                    <div className={"grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-start gap-5 items-center mt-10"}>
                        {getFeaturedProjects().map((item) => (
                            <div className={"ProjectGithubItem justify-center rounded-xl p-4 relative"} style={{ background: 'white' }} key = {item.name}>
                                <img src={item.image} style={{ borderRadius: '4%', height: '250px', width: '100%' }} className={"object-cover"} alt={item.name} />
                                <h3 className={"pt-5"}>{item.name}</h3>
                                <p className={"mt-2 line-clamp"} style={{
                                    color: DESCRIPTION_COLOR,
                                    lineHeight: '25px',
                                    height: '75px',
                                    overflow: 'hidden'
                                }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <h2 className={"mt-10"} style={{ color: PRIMARY_COLOR }}>Explore Projects</h2>
            <p className="ProjectsDescription max-w-md">See Full List of Projects Built as Open, Closed Source</p>
            <div className="ProjectsDescription max-w-md">
                <div className="flex justify-left flex-wrap">
                    <Link
                        to="/projects"
                        className={"rounded-full text-black bg-white transition duration=300 ease-in-out flex items-start p-5 text-xs"}>
                        Explore Projects List
                    </Link>
                </div>
            </div>
        </section>
    );
}