import React from 'react';
import '../styles/GeneralStyles.scss';

export class ServiceComponent extends React.Component<{ name: string, shortName: string, description: string }> {
    render() {
        let {name, shortName, description} = this.props;
        return (
            <div className="ProjectComponentContainer">
                <div className="ProjectItem">
                    <p>{shortName}</p>
                    <h5>{name}</h5>
                    <p className="Description">{description}</p>
                </div>
            </div>
        );
    }
}
