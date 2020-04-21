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


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: HomepageComponent },
];


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterStaticComponent,
      ProjectsComponent
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
