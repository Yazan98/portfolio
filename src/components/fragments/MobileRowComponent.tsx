import React from 'react';
import '../styles/GeneralStyles.scss';
import {InfoManager} from "../../info/InfoManager";
import { NavLink } from "react-router-dom";

export class MobileRowComponent extends React.Component<{ name: string, type: string, description: string, imageUrl: string, appUrl: string, isRtlRow: boolean }> {
    render() {
        let {name, type, description, imageUrl, appUrl, isRtlRow} = this.props;
        return (
            <div className="MobileViewContainer">
                <div className="MobileItem">
                    <div className="MobileRowItem">
                        <div className="DescriptionContent">
                            <h6>{type}</h6>
                            <h2 style={{
                                color: InfoManager.BLUE_COLOR
                            }}>{name}</h2>
                            <p>{description}</p>
                            <NavLink className={"MobileButton"} to={"/project/" + name}><a >View Details</a></NavLink>
                        </div>
                    </div>
                    <div className="MobileRowItem">
                        <img alt="Image" src={imageUrl} />
                    </div>
                </div>
            </div>
        );
    }

}
