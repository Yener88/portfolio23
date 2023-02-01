import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { AHeaderNavbarComponent } from './a-header-navbar/a-header-navbar.component';
import { BAboutmeComponent } from './b-aboutme/b-aboutme.component';
import { CSkillsComponent } from './c-skills/c-skills.component';
import { DProjectsComponent } from './d-projects/d-projects.component';
import { EContactComponent } from './e-contact/e-contact.component';
import { FFooterComponent } from './f-footer/f-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    AHeaderNavbarComponent,
    BAboutmeComponent,
    CSkillsComponent,
    DProjectsComponent,
    EContactComponent,
    FFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
