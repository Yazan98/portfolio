import React, {useEffect} from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import { HOME_PAGE_TITLE } from '../info/StringsUtils';
import HomePageCoverComponent from './home/HomePageCoverComponent';
import './styles/pages/HomePageStyle.scss';
import FooterComponent from './common/FooterComponent';
import ServicesComponent from "./home/ServicesComponent";
import getServicesList, {getSkillsList} from "../info/ServicesList";
import FeaturedProjectsComponent from "./home/FeaturedProjectsComponent";
import ReactGA from "react-ga";

export default function HomePageComponent() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

  return (
    <ScreenContainerComponent title={HOME_PAGE_TITLE}>
      <HomePageCoverComponent />
        <FeaturedProjectsComponent />
        <ServicesComponent services={getServicesList()} description={"This is List of Some Services I Build most of time"} title={"Services"} />
        <ServicesComponent services={getSkillsList()} description={"I Spent Most Time Building Things Using This Technologies To Know About Every Single Thing Inside Full System"} title={"Skills"} />
      <FooterComponent />
    </ScreenContainerComponent>
  );
}