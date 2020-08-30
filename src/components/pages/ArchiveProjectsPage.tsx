import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";
import {infoManager, InfoManager} from "../../info/InfoManager";
import '../styles/GeneralStyles.scss';

export default function ArchivePageComponent() {
    const baz =infoManager.getArchiveList();
    const sortedBaz = [...baz].sort((a, b) => (a.year < b.year) ? 1 : -1);
    return (
        <div className="HomePageContainer">

            <BlueLineComponent />
            <ToolbarComponent />

            <div className={"ArchiveContainer"} style={{ marginRight: "50px", marginLeft: "50px", marginTop: "5em", marginBottom: "5em" }}>
                <h3 style={{
                    color: InfoManager.BLUE_COLOR
                }}>Projects Archive</h3>
                <p>List Of My Projects I Built (Open / Closed) Source Project</p>

                <table style={{width: "80%"}}>
                    <tr>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Made at</th>
                        <th>Built with</th>
                        <th>Type</th>
                        <th>Links</th>
                    </tr>
                    {

                        sortedBaz.map((item) => {
                            let openSource = item.isOpenSource;
                            let type = ""
                            if (openSource) {
                                type = "Open Source"
                            } else {
                                type = "Closed Source"
                            }
                            return <tr>
                                <td>{item.year}</td>
                                <td><strong style={{ color: InfoManager.BLUE_COLOR }}>{item.title}</strong></td>
                                <td>{item.madeAt}</td>
                                <td>{item.builtWith}</td>
                                <td>{type}</td>
                            </tr>
                        })
                    }
                </table>
            </div>

            <FooterComponent />
            <BlueLineComponent />

        </div>
    );
}
