import React from 'react';
import '../styles/GeneralStyles.scss';
import '../styles/AboutPageStyleResponsive.scss';
import ToolbarComponent from "../common/ToolbarComponent";
import BlueLineComponent from "../common/BlueLineComponent";
import {FooterComponent} from "../common/FooterComponent";
import {NavLink} from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function AboutMePageComponent() {
    return (
        <section className={"AboutMeSectionContainer"}>
            <BlueLineComponent />
            <ToolbarComponent />

            <div className={"PageContent"}>
                <p className={"Hint"}>Software Engineer</p>
                <h4><strong>Yazan Tarifi</strong></h4>
                <p className={"Hint"}>A code-minded front-end software engineer focused on Design Full Applications From Backend to Frontend Via Some Platforms, Frameworks, Languages</p>
                <div className={"ResumeContainer"}>
                    <NavLink to="/resume" className="ResumeButtonCustom">View Resume</NavLink>
                    <a style={{ marginLeft: "1em" }} className="ResumeButtonCustom" href="https://github.com/Yazan98">View Github</a>
                </div>

                <div className={"AboutMeContainer"}>
                    <h4><strong>About Me</strong></h4>
                    <p className={"Hint"}>I'm always want to Create a Creative Tools To Make My work Better, Create Opensource Projects, Based In Jordan, Create A backend for Project by design, Build a Restful
                        Api Based on (SpringBoot, Nest.js, Ktor) and Create A Mobile Application Using Latest Technologies in Android Development also there
                        is a good knowledge in Web Development With React.js</p>

                    <h4 className={"Title"}><strong>Technologies & Tools</strong></h4>
                    <ol style={{ paddingTop: "10px" }}>
                        <li>Android Development</li>
                        <li>Html / S-CSS</li>
                        <li>React.js (Type/Javascript)</li>
                        <li>SpringBoot (Java/Kotlin)</li>
                        <li>Nest.js</li>
                    </ol>

                    <h4 className={"Title"}><strong>Work Experience</strong></h4>
                    <br/>
                    {VerticalTabs()}
                </div>

            </div>

            <FooterComponent />
            <BlueLineComponent />
        </section>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                indicatorColor="primary">
                <Tab label="Opensooq" textColor={"black"} {...a11yProps(0)} />
                <Tab label="Novent App" {...a11yProps(1)} />
                <Tab label="Zunbarak" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={"ItemContainer"}>
                    <p style={{ display: "flex" }}>
                        <span style={{ paddingRight: "1em", display: "inline", whiteSpace: "nowrap" }}>Android Developer</span>
                        <span><a className={"CompanyLink"} href="https://opensooq.com">@Opensooq</a></span>
                    </p>
                    <p style={{ whiteSpace: "nowrap", fontSize: "small" }} className={"Hint"}>Jun 2020 - Present</p>
                    <div style={{ fontSize: "small", marginTop: "1em" }}>

                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={"ItemContainer"}>
                    <p style={{ display: "flex" }}>
                        <span style={{ paddingRight: "1em", display: "inline", whiteSpace: "nowrap" }}>Android Developer</span>
                        <span><a className={"CompanyLink"} href="https://noventapp.com">@NoventApp</a></span>
                    </p>
                    <p style={{ whiteSpace: "nowrap", fontSize: "small" }} className={"Hint"}>Jun 2018 - 2020</p>
                    <div style={{ fontSize: "small", marginTop: "1em" }}>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>1. Responsable On Android Applications From Create Project To Deliver The Product To Customer</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>2. Create Responsive Design , Clean Code</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>3. Create Good Base Code With Kotlin Language</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>4. Create Applications In Logistic System</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>5. Implemented Clean Architecture Using Latest Technologies</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>6. Implement Features In Backend (Restful Api)</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className={"ItemContainer"}>
                    <p style={{ display: "flex" }}>
                        <span style={{ paddingRight: "1em", display: "inline", whiteSpace: "nowrap" }}>Junior Android Developer</span>
                        <span><a className={"CompanyLink"} href="https://zunbarak.com">@Zunbarak</a></span>
                    </p>
                    <p style={{ whiteSpace: "nowrap", fontSize: "small" }} className={"Hint"}>Jun 2017 - 2018</p>
                    <div style={{ fontSize: "small", marginTop: "1em" }}>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>1. Design Mvp Apps With Java, Multi Modular Apps</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>2. Implement Good Base Code With Mvp, RxJava</p>
                        <p style={{ paddingRight: "1em", whiteSpace: "nowrap" }}>3. Create Android Apps With Firebase, Restful Api</p>
                    </div>
                </div>
            </TabPanel>
        </div>
    );
}