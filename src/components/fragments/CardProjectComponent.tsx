import React from 'react';
import '../styles/GeneralStyles.scss';

export class CardProjectComponent extends React.Component<{ name: string, type: boolean, description: string, githubUrl: string, url: string }> {
    render() {
        let {name, type, description, githubUrl, url} = this.props;
        return (
            <div className="OpenSourceProjectComponent">
                <div className="GithubProjectItem">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}
