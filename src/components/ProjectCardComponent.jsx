import React, {Component} from 'react';
import '../styles/fragments/project_card_style.scss';
import GithubIcon from '../images/github.png';
import LinkIcon from '../images/link.png';

export const ProjectCardComponent = ({ icon, name, description, filter, icons = [], isOpenSource }) => {
    return (
        <div className={"ProjectCardContainer"}>
            <img src={icon} width={"40px"} height={"40px"} />
            <label>{name}</label>
            <p className={"Description"}>{description}</p>
            <p className={"Filter"}>{filter}</p>
            <p className={"Filter"}>{isOpenSource ? "Open Source" : "Closed Source"}</p>
            <div className={"Links"}>
                {icons.map((item, index) => {
                    let icon;
                    if (item.type === "Github") {
                        icon = GithubIcon;
                    } else {
                        icon = LinkIcon;
                    }
                    return <a key={index} target={"_blank"} href={item.link}><img alt={"Link"} height={"20px"} width={"20px"} src={icon} /></a>
                })}
            </div>
        </div>
    );
}
