import React from 'react';
import {InfoManager} from "../../info/InfoManager";

export function FooterComponent() {
    return (
        <div className="BlueLineContainer"
             style={{
                 backgroundColor: InfoManager.BLUE_COLOR,
                 height: InfoManager.BLUE_LINE_HEIGHT
             }}/>
    );
}
