import React, { Component } from 'react';
import AppBarComponent from '../common/AppBarComponent';
import FooterComponent from '../common/FooterComponent';
import '../App.css';

class AutohubComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBarComponent />

                <div className="App" style={{margin:"50px"}}>

                    <img src="https://user-images.githubusercontent.com/29167110/89196847-a41a0700-d55f-11ea-923f-f687e9366513.png" width="100" height="100" />
                    <p style={{color:"white", width:"30%" , marginTop:"1em"}}>An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts, Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language

                    </p>

                    <h4 style={{color:"white", marginTop:"1em"}}>Autohub (GITHUB CLIENT)</h4>
                    <p style={{color:"white"}}>This Application is Not Completed yet and designed to test Vortex.io library with latest technologies</p>
                    <div className="tags" style={{marginTop:"1em", width:"70%"}}>
                        <p id="AppTag">Kotlin</p>
                        <p id="AppTag">Vortex</p>
                        <p id="AppTag">Firebase</p>
                        <p id="AppTag">Realm</p>
                        <p id="AppTag">Dagger</p>
                        <p id="AppTag">Mvvm</p>
                        <p id="AppTag">RxJava</p>
                        <p id="AppTag">Room</p>
                        <p id="AppTag">Live Data</p>
                    </div>

                    <div className="AppImages" style={{textAlign:"center"}}>
                        <div class="row">
                            <div class="col-xs">
                                <img className="AppImage" src="https://user-images.githubusercontent.com/29167110/89159145-f3424680-d523-11ea-8dcc-837c65103a37.png" />
                                <img className="AppImage" src="https://user-images.githubusercontent.com/29167110/89159661-a7dc6800-d524-11ea-846a-d8f136210f7d.png" />
                                <img className="AppImage" src="https://user-images.githubusercontent.com/29167110/89159719-bd519200-d524-11ea-9a1d-2b922798fc2a.png" />
                                <img className="AppImage" src="https://user-images.githubusercontent.com/29167110/89159770-d22e2580-d524-11ea-8e17-5e96542ac62f.png" />
                            </div>
                        </div>
                    </div>

                </div>

                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default AutohubComponent;
