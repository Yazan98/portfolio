import React from 'react';
import {InfoManager} from "../../info/InfoManager";

export default function BlueLineComponent() {
    return (
        <div className="BlueLineContainer"
        style={{
            backgroundColor: InfoManager.BLUE_COLOR,
            height: InfoManager.BLUE_LINE_HEIGHT
        }}/>
    );
}
