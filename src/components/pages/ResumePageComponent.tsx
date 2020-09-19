import React from 'react';
import '../styles/GeneralStyles.scss';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";
import Grid from "@material-ui/core/Grid";
import {infoManager, InfoManager} from "../../info/InfoManager";
import {ExpItem} from "../../info/Entities";

export default function ResumePageComponent() {
    return (
        <div className="ResumePageComponentContainer">
            <BlueLineComponent />
            <ToolbarComponent />

            <div className="ResumeContainer">
                <Grid container justify="center">
                    <Grid item xs={6} spacing={0}>
                        <div className="BlueSide">
                            <div className={"Content"}>
                                <p style={{ textAlign: "left", margin: "0" }}>CV</p>
                                <h2><strong style={{ color: InfoManager.BLUE_COLOR }}>Yazan Tarifi</strong></h2>
                                <h6>(Android Developer)</h6>
                                <br/>
                                <h4 className={"Header"}>CONTACT</h4>
                                <p>
                                    <span>Location :  Amman , Jordan</span>
                                    <br />

                                    <span>Phone Number : 0780132297</span>
                                    <br />

                                    <span>Another Phone Number : 06 4901418</span>
                                    <br />

                                    <span>Email : </span><span><a href="mailto:yazantarifi98@gmail.com">yazantarifi98@gmail.com</a></span>
                                    <br />

                                    <span>Linkedin : </span><span><a href="https://www.linkedin.com/in/yazan-tarifi-106282192/">Linkedin Account</a> </span>
                                    <br />

                                    <span>Github : </span><span><a href="https://github.com/Yazan98">Github Account</a> </span>
                                    <br />
                                </p>

                                <h4 className={"Header"}>SKILLS</h4>
                                <p>
                                    <div className="RankContainer">
                                        <span>Android Development  </span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                        </div>
                                    </div>

                                    <div className="RankContainer">
                                        <span>Backend (SpringBoot)</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="EmptyCircle"/>
                                        </div>
                                    </div>

                                    <div className="RankContainer">
                                        <span>Backend (Nest.js)</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="EmptyCircle"/>
                                            <div className="EmptyCircle"/>
                                        </div>
                                    </div>

                                    <div className="RankContainer">
                                        <span>Frontend (React.js)</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="EmptyCircle"/>
                                            <div className="EmptyCircle"/>
                                        </div>
                                    </div>

                                    <div className="RankContainer">
                                        <span>Backend (Ktor)</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="EmptyCircle"/>
                                            <div className="EmptyCircle"/>
                                            <div className="EmptyCircle"/>
                                        </div>
                                    </div>
                                </p>

                                <h4 className={"Header"}>LANGUAGES</h4>
                                <p>
                                    <div className="RankContainer">
                                        <span>Arabic</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                        </div>
                                    </div>

                                    <div className="RankContainer">
                                        <span>English</span>
                                        <div className="CirclesContainer">
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="FilledCircle"/>
                                            <div className="EmptyCircle"/>
                                            <div className="EmptyCircle"/>
                                        </div>
                                    </div>
                                </p>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} spacing={0}>
                        <div className="CVContent">
                            {getPrimaryElement("EXPERIENCE", "Jan", "Present", "Opensooq", "Android Developer")}
                            {getPrimaryElement("EXPERIENCE", "Jan", "2020", "NoventApp", "Android Developer, 2 Years")}
                            {getPrimaryElement("EDUCATION", "Jan", "2016", "Hashmite University", "Bachelor , Zarqa - Software engineering")}
                            {getTitleDescriptionElement("ABOUT ME", "I am passionate Android developer interested in all technologies\n" +
                                "have a small background in web, always trying to learn new\n" +
                                "languages and concepts with a good experience in Android and\n" +
                                "backend using Java and kotlin,\n" +
                                "I have multiple open source projects :\n" +
                                "https://github.com/Vortex-io\n")}

                            {getExperienceSectionElement("FRONTEND SKILLS", "Android Developer", "I have 4 years experience", "Java , Kotlin", infoManager.getAndroidExp())}
                            {getExperienceSectionElement("FRONTEND SKILLS", "React.js Developer", "Personal Experience", "Javascript . Typescript", infoManager.getReactExp())}
                            {getExperienceSectionElement("BACKEND SKILLS", "SpringBoot Developer", "I have 2 years experience", "Java , Kotlin", infoManager.getBackendExp())}
                            {getExperienceSectionElement("OTHER SKILLS", "Random Skills", "Personal Experience", "Java , Kotlin , Javascript", infoManager.getOtherExp())}
                        </div>
                    </Grid>
                </Grid>
            </div>

            <FooterComponent />
        </div>
    );
}

function getPrimaryElement(title: string, start: string, date: string, name: string, description: string) {
    return (
      <div className="PrimaryElementContainer">
          {getTitleElement(title)}
         <div className="ContentContainer">
             <div className="DateContainer">
                 <div className="SmallCircle"/>
                 <h5>{start} - {date}</h5>
             </div>
             <div className="ContentContainerDescription">
                <h6><strong>{name}</strong></h6>
                 <p>{description}</p>
             </div>
         </div>
      </div>
    );
}

function getTitleDescriptionElement(title: string, description: string) {
    return (
        <div className="PrimaryTitleContentContainer">
            {getTitleElement(title)}
            <p className="DescriptionTitle">{description}</p>
        </div>
    );
}

function getExperienceSectionElement(title: string, subTitle: string, exp: string, languages: string, expItems: Array<ExpItem>) {
    return (
        <div className={"ExperienceSectionElement"}>
            {getTitleElement(title)}
            <h6 style={{ marginTop: "1em" }}><strong>{subTitle}</strong></h6>
            <p>
                <span><strong>Brief : </strong>{exp}</span>
                <br />
                <span><strong>Languages : </strong>{languages}</span>
            </p>
            <strong>Technologies</strong>
            <div className="Items" style={{ marginTop: "10px" }}>
                {expItems.map((item , index) => {
                    return <p className="ExpItem" key={index}>
                        <span><strong>{item.type} : </strong></span>
                        <span>{item.description}</span>
                    </p>
                })}
            </div>
        </div>
    );
}

function getTitleElement(title: string) {
    return (
        <h4 className="PrimaryContainer">{title}</h4>
    );
}