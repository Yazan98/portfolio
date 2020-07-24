import React, { Component } from 'react';
import { FaGithub, FaDocu } from 'react-icons/fa';
import '../Vortex.css';
import { Grid } from '@material-ui/core';
import '../App.css';
import { NavLink } from 'react-router-dom'
import FooterComponent from '../common/FooterComponent';

class VortexMainPageComponent extends Component {

  componentDidMount() {
    document.title = "Vortex"
  }

    render() {
        return (
            <div className="VortexContainer">
                <div class="HighlightWebsite">
              <div class="MainArea">
                <h1 class="MainVortex">Vortex</h1>
                <p class="Description">Android Infrastructure Built With Kotlin To Build High Level Multi Modular Android Applications</p>
                <p>
                  <a class="button is-white is-outlined" style={{ marginRight: "0.75rem" }}><NavLink style={{color:"white"}} to="/vortex-docs">Vortex Docs</NavLink></a>
                  <a class="button is-white is-outlined" href="https://github.com/Yazan98/Vortex">
                    <span class="icon"><span id="Source"><FaGithub /> Source On Github</span></span></a>
                  </p>
            </div>
            </div>

            <section className="Features">
              <div className="container">
                <div className="row">
                  <div className="col-sm" id="Item">
                    <p className="bg">
                      <img src="https://user-images.githubusercontent.com/29167110/80116087-70513d80-857d-11ea-888e-283b903d8ab4.png" width="40" height="40"/>
                    </p>
                    <h2>Multi Modular Applications</h2>
                    <h4>Build Multi Modular Android Applications With Clean Layers Implementation</h4>
                  </div>
                  <div className="col-sm" id="Item">
                    <p className="bg">
                      <img src="https://user-images.githubusercontent.com/29167110/80117192-c4a8ed00-857e-11ea-9ccf-8ad2f3ced60b.png" width="40" height="40"/>
                    </p>
                    <h2>Base Code</h2>
                    <h4>Base Code Ready To Use With Common UseCases In Any Android Application</h4>
                  </div>
                  <div className="col-sm" id="Item">
                    <p className="bg">
                      <img src="https://user-images.githubusercontent.com/29167110/80117747-734d2d80-857f-11ea-8f35-b54b235f3631.png" width="40" height="40"/>
                    </p>
                    <h2>Latest Technologies</h2>
                    <h4>Vortex Used and Combined The Latest Technologies Into One Base Code</h4>
                  </div>
                  <div className="col-sm" id="Item">
                    <p className="bg">
                      <img src="https://user-images.githubusercontent.com/29167110/80118211-fff7eb80-857f-11ea-9b9d-c772cba98689.png" width="40" height="40"/>
                    </p>
                    <h2>Open Source</h2>
                    <h4>Vortex Built With ♥ Kotlin In Open Source Repository On Github</h4>
                  </div>
                </div>
              </div>

            </section>

            </div>
        );
    }
}

export default VortexMainPageComponent;