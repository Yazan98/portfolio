import React, { useMemo, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/pages/all_projects.scss';
import { ProjectCardViewComponent } from '../components/ProjectCardComponent';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { findProjectByFilterType, findProjectByName } from '../info/ProjectsDetails';
import { findProjectByFilterTypeAndLanguage } from '../info/ProjectsList';
import { ToolbarViewComponent } from '../components/ToolbarComponent';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function AllProjectsComponent() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [projects, setProjects] = useState([]);
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState(isApplicationLightTheme());
  window.scrollTo(0, 0);
  useMemo(() => {
    if (search) {
      setProjects(findProjectByName(search, filterType));
    } else if (language) {
      setProjects(findProjectByFilterTypeAndLanguage(filterType, language));
    } else {
      setProjects(findProjectByFilterType(filterType));
    }
  }, [search, filterType, language]);

  return (
    <PersonalPagesViewComponent title="Yazan Tarifi - All Projects">
      <ToolbarViewComponent isNormalPage />
      <div className="AllProjectsContainer">
        <div className="MainContent">
          <div className="Title">
            <h1 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Projects</h1>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>A Big List of My Projects Open Source and Available To Show</p>
          </div>
          <div />
          <div />
          <form className="SearchFields" noValidate autoComplete="off">
            <TextField
              style={{ color: 'white' }}
              color="secondary"
              id="standard-basic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              label="Search By Name"
            />
          </form>

          <form className="SearchFields" noValidate autoComplete="off">
            <FormControl className="SelectorController">
              <InputLabel id="demo-controlled-open-select-label">All</InputLabel>
              <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" onChange={(e) => setFilterType(e.target.value)}>
                <MenuItem value="All">All Projects</MenuItem>
                <MenuItem value="Android">Android Apps</MenuItem>
                <MenuItem value="PWA">Websites - PWA</MenuItem>
                <MenuItem value="Web Apps">Web Apps</MenuItem>
                <MenuItem value="Plugin">Tools</MenuItem>
              </Select>
            </FormControl>
          </form>
          <form className="SearchFields" noValidate autoComplete="off">
            <FormControl className="SelectorController">
              <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
              <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" onChange={(e) => setLanguage(e.target.value)}>
                <MenuItem value="All">All Languages</MenuItem>
                <MenuItem value="Kotlin">Kotlin</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="Ruby">Ruby</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
                <MenuItem value="Typescript">Typescript</MenuItem>
                <MenuItem value="PHP">PHP</MenuItem>
                <MenuItem value="Groovy">Groovy</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
        <div className="ProjectsContainer">
          {projects.map((item) => (
            <ProjectCardViewComponent
              icon={item.logo}
              name={item.name}
              description={item.description}
              filter={item.filter}
              icons={item.links}
              theme={theme}
              isOpenSource={item.isOpenSource}
            />
          ))}
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}

export const AllProjectsViewComponent = React.memo(AllProjectsComponent);
