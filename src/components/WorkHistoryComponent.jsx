import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/fragments/histrory.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `0px ${theme.palette.divider}`,
        border: 0
    },
    indicator: {
        backgroundColor: 'white',
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id={"ContentTabs"} className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                indicatorColor={"primary"}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Opensooq" {...a11yProps(0)} />
                <Tab label="NoventApp" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={"Content"}>
                    <p className={"Titlepanel"}><span>Android Developer</span> <a href={"https://opensooq.com"} target="_blank">@Opensooq</a></p>
                    <p className={"Small"}>Jun 2020 - Present</p>
                    <ol>
                        <li>Create, Maintain Android Application Features</li>
                        <li>Create Responsive Design , Clean Code</li>
                        <li>Create Good Base Code With Kotlin Language</li>
                        <li>Implemented Clean Architecture Using Latest Technologies</li>
                    </ol>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={"Content"}>
                    <p className={"Titlepanel"}><span>Android Developer</span> <a href={"https://noventapp.com"} target="_blank">@NoventApp</a></p>
                    <p className={"Small"}>Jun 2018 - December 2020</p>
                    <ol>
                        <li>Responsible On Android Applications From Create Project To Deliver The Product To Customer</li>
                        <li>Create Responsive Design , Clean Code</li>
                        <li>Create Good Base Code With Kotlin Language</li>
                        <li>Create Applications In Logistic System</li>
                        <li>Implemented Clean Architecture Using Latest Technologies</li>
                        <li>Implement Features In Backend (Restful Api)</li>
                    </ol>
                </div>
            </TabPanel>
        </div>
    );
}