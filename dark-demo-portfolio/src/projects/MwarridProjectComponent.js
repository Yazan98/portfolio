import React, { Component } from 'react';
import AppBarComponent from '../common/AppBarComponent';
import FooterComponent from '../common/FooterComponent';
import '../App.css';

class MwarridProjectComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBarComponent />

                <div className="MwarridContainer" style={{margin:"50px"}}>

                    <img src="https://user-images.githubusercontent.com/29167110/89157146-e2440600-d520-11ea-95ed-bf2a9836148d.png" width="100" height="100" />
                    <p style={{color:"white", width:"30%" , marginTop:"1em"}}>An integrated electronic marketing platform from a website and an application on smartphones and tablets help to connect the food sector suppliers in all their fields with restaurants, cafes, hotels, wedding hall and all those involved in selling food in the retail sector and soon individuals. So that suppliers periodically display their products, set their prices, and market them, to help our customers follow the market, view the latest offers, instant order, and track order status through the supplier's online platform.</p>

                    <h4 style={{color:"white", marginTop:"1em"}}>Mwarrid (ANDROID APP)</h4>
                    <p style={{color:"white"}}>This Application Designed With latest android technologies with Mvvm Archeticture, Powered by Switch.jo company</p>
                    <div className="tags" style={{marginTop:"1em", width:"70%"}}>
                        <p id="AppTag">Kotlin</p>
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

export default MwarridProjectComponent;
