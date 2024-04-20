import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import FooterComponent from './common/FooterComponent';
import ToolbarComponent from './common/ToolbarComponent';
import { PRIMARY_COLOR } from '../info/ColorUtils';
import './styles/pages/ProjectsPageStyle.scss';
import getProjectsList, {
  ALL_FILTER_TYPE, ANDROID_FILTER_TYPE,
  FILTERED_PROJECTS_FILTER_TYPE, getProjectsListByFilter,
  TOOLS_FILTER_TYPE,
  WEB_APPS_FILTER_TYPE, WEBSITES_FILTER_TYPE, ALL_PROJECTS_ID, IOS_FILTER_TYPE, MAC_APPS_FILTER_TYPE,
} from '../info/ProjectsList';
import ProjectViewComponent from './childs/ProjectViewComponent';
import ReactGA from "react-ga";

export default function ProjectsPageComponent() {
  const [filterType, setFilterType] = React.useState(ALL_FILTER_TYPE);
  const [projectsList, setProjectsList] = React.useState(getProjectsList());
  const history = useHistory();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  useEffect(() => {
    if (filterType === ALL_FILTER_TYPE) {
      setProjectsList(getProjectsList());
    } else {
      setProjectsList(getProjectsListByFilter(filterType));
    }
  }, [filterType]);

  const onItemClicked = (id) => {
    if (id === ALL_PROJECTS_ID) {
      history.push('/projects/all');
    } else {
      history.push(`/projects/${id}`);
    }
  };

  return (
    <ScreenContainerComponent className="ProjectsPageComponent" title="Yazan Tarifi Portfolio - Projects">
      <ToolbarComponent />
      <main className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
        <h2 style={{ color: PRIMARY_COLOR }}>Projects</h2>
        <p className="ProjectsDescription">This is List of Some Projects I Built</p>
        <div className={"grid grid-cols-1 place-items-start gap-2 md:flex md:flex-start md:justify-start lg:flex lg:flex-start lg:justify-start"}>
          <p style={{ color: filterType === ALL_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(ALL_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === ALL_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "text-black py-2 px-4")}>All Projects</p>
          <p style={{ color: filterType === ANDROID_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(ANDROID_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === ANDROID_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "text-black py-2 px-4")}>Android Apps</p>
          <p style={{ color: filterType === IOS_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(IOS_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === IOS_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "text-black py-2 px-4")}>IOS Apps</p>
          <p style={{ color: filterType === MAC_APPS_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(MAC_APPS_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === MAC_APPS_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "text-black py-2 px-4")}>Macos Apps</p>
          <p style={{ color: filterType === WEBSITES_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(WEBSITES_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === WEBSITES_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "py-2 px-4")}>Websites</p>
          <p style={{ color: filterType === WEB_APPS_FILTER_TYPE ? "white" : "black" }} onClick={() => setFilterType(WEB_APPS_FILTER_TYPE)} className={"ItemFilter mr-5 " + (filterType === WEB_APPS_FILTER_TYPE ? "bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full" : "py-2 px-4")}>Web Apps</p>
        </div>
        {projectsList ? (
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 items-center mt-10"}>
              {projectsList.map((item) => (
                  <ProjectViewComponent
                      key={item.id}
                      onClickListener={onItemClicked}
                      projectView={item}
                  />
              ))}
            </div>
        ) : null}
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
