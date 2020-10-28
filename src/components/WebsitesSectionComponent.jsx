import React, {Component} from 'react';
import '../styles/fragments/fragments_style.scss';
import Portfolio from '../images/websites/portfolio.png';
import Netflix from '../images/websites/netflix.png';

class WebsitesSectionComponent extends Component {
    render() {
        return (
            <section className={"WebsitesContainer"}>
                <div className={"Content"}>
                    <div className={"Item"}>
                        <div className={"Icon"}>
                            <img alt={"Portfolio"} className={"Image"} src={Portfolio} />
                        </div>
                        <div className={"TextContent"}>
                            <div className={"Content"}>
                                <p>Personal Website - 2020</p>
                                <h4>Portfolio</h4>
                                <p>This Project is React Website To Add Some Projects I worked on with Description on each Project Info</p>
                                <p className={"Tags"}>
                                    <span>React.js</span>
                                    <span>Routers</span>
                                    <span>SASS</span>
                                    <span>Jsx</span>
                                    <span>Typescript</span>
                                    <span>PWA</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"Item"}>
                        <div className={"Icon"}>
                            <img alt={"Netflix"} className={"Image"} src={Netflix} />
                        </div>
                        <div className={"TextContent"}>
                            <div className={"Content"}>
                                <p>Training Website - 2020</p>
                                <h4>Netflix Clone</h4>
                                <p>This Project is React Website To Learn About State , Callbacks, Api Requests, Move Data Between Pages</p>
                                <p className={"Tags"}>
                                    <span>React.js</span>
                                    <span>Routers</span>
                                    <span>SASS</span>
                                    <span>Typescript</span>
                                    <span>Api</span>
                                    <span>Search</span>
                                    <span>State</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WebsitesSectionComponent;