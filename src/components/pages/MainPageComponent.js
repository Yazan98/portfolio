import React, { Component } from 'react';
import SkillsComponent from '../SkillsComponent';
import HomeComponent from '../HomeComponent';

class MainPageComponent extends Component {
    render() {
        return (
            <div style={{ width:'80%', padding:'10em' }}>
                <HomeComponent />
                <SkillsComponent />
            </div>
        );
    }
}

export default MainPageComponent;
