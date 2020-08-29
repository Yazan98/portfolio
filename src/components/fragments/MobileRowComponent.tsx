import React from 'react';
import '../styles/GeneralStyles.scss';
import {InfoManager} from "../../info/InfoManager";

export class MobileRowComponent extends React.Component<{ name: string, type: string, description: string, imageUrl: string, appUrl: string, isRtlRow: boolean }> {
    render() {
        let {name, type, description, imageUrl, appUrl, isRtlRow} = this.props;
        let row;
        if (isRtlRow) {
            row = MobileRowComponent.getRtlRow(name, type, description, imageUrl, appUrl);
        } else {
            row = MobileRowComponent.getLtrRow(name, type, description, imageUrl, appUrl);
        }
        return (
            <div className="MobileViewContainer">
                <div className="MobileItem">
                    { row }
                </div>
            </div>
        );
    }

    private static getRtlRow(name: string, type: string, description: string, imageUrl: string, appUrl: string) {
        return (
            <div className="row">
                <div id="AppDescription" className="col">
                    <div className="DescriptionContent">
                        <h6>{type}</h6>
                        <h2 style={{
                            color: InfoManager.BLUE_COLOR
                        }}>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col">
                    <img src={imageUrl} />
                </div>
            </div>
        );
    }

    private static getLtrRow(name: string, type: string, description: string, imageUrl: string, appUrl: string) {
        return (
            <div className="row">
                <div className="col">
                    <img src={imageUrl} />
                </div>
                <div id="AppDescription" className="col">
                    <div className="DescriptionContent">
                        <h6>{type}</h6>
                        <h2 style={{
                            color: InfoManager.BLUE_COLOR
                        }}>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
