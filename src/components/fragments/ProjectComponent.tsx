import React from 'react';
import '../styles/GeneralStyles.scss';

export class ProjectView extends React.Component<{ name: string, shortName: string, description: string }> {
    render() {
        let {name, shortName, description} = this.props;
        return (
            <div className="ProjectComponentContainer">
                <div className="ProjectItem">
                    <p>{shortName}</p>
                    <h6>{name}</h6>
                    <p className="Description">{description}</p>
                </div>
            </div>
        );
    }
}
