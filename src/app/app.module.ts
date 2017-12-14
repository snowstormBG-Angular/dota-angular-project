import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';


import {AuthenticationModule} from "./services/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    // ReactiveFormsModule
  ],
  providers: [AuthenticationModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
