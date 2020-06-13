import React, { Component } from 'react';
import { FaGithub, FaDocu } from 'react-icons/fa';
import '../Vortex.css';

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
                  <a class="button is-white is-outlined" style={{ marginRight: "0.75rem" }}>Vortex Docs</a>
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

            <section className="UniqueFeatures">
              <h2>Unique Features</h2>
              <h4>The Main Features In Vortex With Simple OverView About The Project Structure</h4>
              <div className="container">
                <div className="row" id="textSection">
                  <div className="col-sm">
                    <div className="card" style={{ width:"32rem" }}>
                      <div className="row">
                        <div className="col-2" style={{ width:"10rem" }}>
                          <img className="CardImage" width="40" height="40" src="http://digidocs.gbjsolution.com/content/images/2020/02/startup.svg" alt="Getting Started" />
                        </div>
                        <div className="col-10"style={{ width:"100rem" }}>
                          <h5 className="card-title">Getting Started</h5>
                          <h5 className="card-title-2">Check And Understand Vortex Concept With State Architecture With Vortex Layers Implementation, How The Components Works Together</h5>
                          <a className="card-text" routerLink ="/projects/vortex/docs" routerLinkActive="router-link-active" >Welcome To Vortex</a><br></br>
                          <a className="card-text">OverView About Vortex Structure</a><br></br>
                          <a className="card-text">Vortex Problem</a><br></br>
                          <a className="card-text">Supported Applications</a><br></br>
                          <a className="card-text-all">See All <svg class="ArrowImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card" style={{ width:"32rem" }}>
                      <div className="row">
                        <div className="col-2" style={{ width:"10rem" }}>
                          <img className="CardImage" width="40" height="40" src="http://digidocs.gbjsolution.com/content/images/2020/02/gears.svg" alt="Getting Started" />
                        </div>
                        <div className="col-10" style={{ width:"100rem" }}>
                          <h5 className="card-title">Configuration</h5>
                          <h5 className="card-title-2">How Vortex Can Configure The Android Applications With Single / Multi Modular Apps With Common Libraries</h5>
                          <a className="card-text">Vortex With Gradle Configuration</a><br></br>
                          <a className="card-text">Vortex With Multi Modular Apps</a><br></br>
                          <a className="card-text">Vortex Problem</a><br></br>
                          <a className="card-text-all">See All <svg class="ArrowImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row" id="textSection">
                  <div className="col-sm">
                    <div className="card" style={{ width:"32rem" }}>
                      <div className="row">
                        <div className="col-2" style={{ width:"10rem" }}>
                          <img className="CardImage" width="40" height="40" src="http://digidocs.gbjsolution.com/content/images/2020/02/puzzle.svg" alt="Getting Started" />
                        </div>
                        <div className="col-10" style={{ width:"100rem" }}>
                          <h5 className="card-title">Components</h5>
                          <h5 className="card-title-2">What is Vortex Components And How To Combine Them In One Feature</h5>
                          <a className="card-text">Vortex UI Components</a><br></br>
                          <a className="card-text">Vortex Data Components</a><br></br>
                          <a className="card-text">Vortex Domain Components</a><br></br>
                          <a className="card-text">Vortex Extras Compoenents</a><br></br>
                          <a className="card-text-all">See All <svg class="ArrowImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card" style={{ width:"32rem" }}>
                      <div className="row">
                        <div className="col-2" style={{ width:"10rem" }}>
                          <img className="CardImage" width="40" height="40" src="http://digidocs.gbjsolution.com/content/images/2020/02/graphic-design.svg" alt="Getting Started" />
                        </div>
                        <div className="col-10" style={{ width:"100rem" }}>
                          <h5 className="card-title">Customization</h5>
                          <h5 className="card-title-2">Vortex CLI to Generate Android Applications With Ready Implementation and Generate Custom Features Via Android Studio Plugin</h5>
                          <a className="card-text">Vortex CLI</a><br></br>
                          <a className="card-text">CLI Features, Components</a><br></br>
                          <a className="card-text">Vortex Android Studio Plugin</a><br></br>
                          <a className="card-text-all">See All <svg class="ArrowImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
}

export default VortexMainPageComponent;