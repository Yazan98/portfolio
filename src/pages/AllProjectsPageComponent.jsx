import React, {useEffect, useState} from 'react';
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";
import {BlueLineComponent} from "../components/BlueLineComponent";
import '../styles/fragments/all_projects_page.scss';
import TextField from "@material-ui/core/TextField";
import {findProjectByFilterType, findProjectByName, Projects} from "../info/ProjectsDetails";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {Button} from "@material-ui/core";
import {ProjectCardComponent} from "../components/ProjectCardComponent";

export const AllProjectsComponent = () => {
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (search) {
            setProjects(findProjectByName(search, filterType))
        } else {
            setProjects(findProjectByFilterType(filterType))
        }
    }, [search, filterType])

    return (
        <div className={"AllProjectsContainer"}>
            <BlueLineComponent/>
            <ToolbarComponent/>
            <div className={"MainContent"}>
                <h1>Projects</h1>
                <div></div>
                <div></div>
                <form className={"SearchFields"} noValidate autoComplete="off">
                    <TextField id="standard-basic" value={search} onChange={(e) => setSearch(e.target.value)} label="Search By Name"/>
                </form>

                <form className={"SearchFields"} noValidate autoComplete="off">
                    <FormControl className={"SelectorController"}>
                        <InputLabel id="demo-controlled-open-select-label">All</InputLabel>
                        <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" onChange={(e) => setFilterType(e.target.value)}>
                            <MenuItem value={"All"}>All Projects</MenuItem>
                            <MenuItem value={"Android"}>Android Apps</MenuItem>
                            <MenuItem value={"PWA"}>Websites - PWA</MenuItem>
                            <MenuItem value={"Web Apps"}>Web Apps</MenuItem>
                            <MenuItem value={"Plugin"}>Tools</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>
            <div className={"ProjectsContainer"}>
                {projects.map((item, index) => {
                    return (<ProjectCardComponent key={index} icon={item.logo} name={item.name} description={item.description} filter={item.filter} icons={item.links} isOpenSource={item.isOpenSource} />);
                })}
            </div>
            <FooterComponent/>
        </div>
    );
}
