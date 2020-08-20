import React, { Component } from 'react';

export default function FooterComponent() {
    return (
<footer class="page-footer font-small teal pt-4" style={{backgroundColor:"#141619"}}>

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5>Personal Website</h5>
        <p>This site was designed based on React.js to create web pages describing the projects I am working on in GitHub and giving an (aesthetic, documentation, design webpage) form and explanation about the one project, here you can find the open source projects and closed source but not all of them (Welcome :D)</p>

      </div>

      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-6 mb-md-0 mb-3">

        <h5>About My Projects</h5>
        <p>Most of the projects that I work on are made to improve and develop from my own applications that facilitate the programming process and allow freedom to make very large applications that are developed very very quickly because of the application infrastructure that makes you reach your goal quickly faster than you imagined</p>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3" style={{ marginTop:"20px" }}>© 2020 Copyright:
    <a href="https://github.com/Yazan98"> Yazan98</a>
  </div>

</footer>
    );
}