import React from 'react';
import {DESCRIPTION_COLOR, PRIMARY_COLOR} from "../../info/ColorUtils";
import '../styles/pages/HomePageStyle.scss';

export default function ServicesComponent({ services, title, description }) {
    return (
        <section className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
            <h2 className={"mt-10"} style={{ color: PRIMARY_COLOR }}>{title}</h2>
            <p className="ProjectsDescription max-w-md">{description}</p>
            <div className={"max-w-none md:max-w-5xl lg:max-w-5xl"}>
                <div className={"flex flex-1 justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start p-2"}>
                    <div className={"grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-start gap-5 items-center mt-10"}>
                        {services ? services.map((item) => (
                            <div className={"ProjectGithubItem justify-center rounded-xl border-2 p-4 relative"} key = {item.title}>
                                <p className={"text-xs color-white truncate max-w-prose"} style={{ color: PRIMARY_COLOR }}>{item.tag}</p>
                                <h3>{item.title}</h3>
                                <p className={"mt-5 line-clamp"} style={{ color: DESCRIPTION_COLOR }}>{item.description}</p>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}
