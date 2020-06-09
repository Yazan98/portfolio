import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterStaticComponent } from './footer-static/footer-static.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { OpensourceProjectsComponent } from './opensource-projects/opensource-projects.component';
import { ContactComponent } from './contact/contact.component';
import { VortexMainPageComponent } from './sub/vortex/vortex-main-page/vortex-main-page.component';
import { VortexDocsComponent } from './sub/vortex/vortex-docs/vortex-docs.component';
import { MwarridPageComponent } from './sub/mwarrid-page/mwarrid-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/vortex', component: VortexMainPageComponent },
  { path: 'projects/vortex/docs', component: VortexDocsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/other', component: OpensourceProjectsComponent },
  { path: 'projects/mwarrid', component: MwarridPageComponent }
];


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterStaticComponent,
      ProjectsComponent,
      OpensourceProjectsComponent,
      ContactComponent,
      VortexDocsComponent,
      VortexMainPageComponent,
      MwarridPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
