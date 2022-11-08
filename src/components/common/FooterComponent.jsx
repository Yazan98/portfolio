import React from 'react';
import StackOverFlowIcon from '../images/footer/portfolio_stackoverflow.png';
import GithubIcon from '../images/footer/portfolio_github.png';
import LinkedInIcon from '../images/footer/portfolio_linkedin.png';
import BehanceIcon from '../images/footer/portfolio_behance.png';
import DevIcon from '../images/footer/portfolio_dev.png';
import ReactGA from "react-ga";

export default function FooterComponent() {
  return (
    <footer className={"p-5 bg-gray-100"}>
      <div className={"flex justify-center items-center p-5"}>
        <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://github.com/Yazan98"} onClick={() => {
            ReactGA.event({
                category: "FooterLink",
                action: "FooterButton - Github Account",
                label: "Project Button - FooterLink"
            })
        }}>
            <img loading={"lazy"} src={GithubIcon} alt={"Yazan Tarifi  - Github Account"} width={"30px"} height={"30px"} />
        </a>
        <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://www.linkedin.com/in/yazan-tarifi-106282192/"} onClick={() => {
            ReactGA.event({
                category: "FooterLink",
                action: "FooterButton - LinkedIn Account",
                label: "Project Button - FooterLink"
            })
        }}>
            <img loading={"lazy"} src={LinkedInIcon} alt={"Yazan Tarifi  - LinkedIn Account"} width={"30px"} height={"30px"} />
        </a>
        <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://dev.to/yazan98"} onClick={() => {
            ReactGA.event({
                category: "FooterLink",
                action: "FooterButton - Dev.to Account",
                label: "Project Button - FooterLink"
            })
        }}>
            <img loading={"lazy"} src={DevIcon} alt={"Yazan Tarifi  - Dev.to Account"} width={"30px"} height={"30px"} />
        </a>
        <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://www.behance.net/yazantarifi98"} onClick={() => {
            ReactGA.event({
                category: "FooterLink",
                action: "FooterButton - Behance Account",
                label: "Project Button - FooterLink"
            })
        }}>
            <img loading={"lazy"} src={BehanceIcon} alt={"Yazan Tarifi  - Behance Account"} width={"30px"} height={"30px"} />
        </a>
        <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://stackoverflow.com/users/12858222/yt98"} onClick={() => {
            ReactGA.event({
                category: "FooterLink",
                action: "FooterButton - Stackoverflow Account",
                label: "Project Button - FooterLink"
            })
        }}>
            <img loading={"lazy"} src={StackOverFlowIcon} alt={"Yazan Tarifi  - Stackoverflow Account"} width={"30px"} height={"30px"} style={{imageResolution: "150dpi"}} />
        </a>
          <a target="_blank" rel="noreferrer" className={"p-3 cursor-pointer"} href={"https://hub.docker.com/u/yt98"} onClick={() => {
              ReactGA.event({
                  category: "FooterLink",
                  action: "FooterButton - DockerHub Account",
                  label: "Project Button - FooterLink"
              })
          }}>
              <img loading={"lazy"} src={"https://user-images.githubusercontent.com/29167110/200654266-e330c036-0124-4fda-9092-5520b9059d5e.svg"} alt={"Yazan Tarifi  - DockerHub Account"} width={"30px"} height={"30px"} style={{imageResolution: "150dpi"}} />
          </a>
      </div>
      <br/>
      <hr/>
      <div className={"items-center h-16 text-gray-600 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between"}>
          <p>Yazan Tarifi (V 3.0.1) - Copyright @ 2021 Personal Website</p>
          <p className={"pt-2 md:pt-0 lg:pt-0 xl:pt-0"}>Website is Open Source (<a href="https://github.com/Yazan98/portfolio">Website Url</a>)</p>
      </div>
    </footer>
  );
}

