import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterStaticComponent } from './footer-static/footer-static.component';
import { HighlightComponent } from './highlight/highlight.component';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ToolsComponent } from './tools/tools.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: HomepageComponent },
  { path: 'projects', component: HomepageComponent },
  { path: 'contact', component: HomepageComponent },
];


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterStaticComponent,
      HighlightComponent,
      SkillsComponent,
      PlatformsComponent,
      ToolsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
