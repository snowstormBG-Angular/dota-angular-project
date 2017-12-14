import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//services
import {ValidatePassword} from './components/public/register-form/validate-password';

//guards
import {AuthGuard} from './guards/auth.guard.service';
import {LandingGuard} from './guards/landing.guard.service'

//components
//public
import {LandingPageComponent} from './components/public/landing-page/landing-page.component';
import {LoginComponent} from "./components/public/login-form/login.component";
import {RegisterComponent} from "./components/public/register-form/register.component";
import {NewsComponent} from './components/public/news/news.component';
import { ErrorPageComponent } from './components/public/error-page/error-page.component';
//private
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { HeroesComponent } from './components/private/heroes/heroes.component';
import {AuthenticationModule} from "./services/auth.module";
import { BoxComponent } from './components/private/dashboard/box/box.component';


//todo: add guards
//default auth
//guard login and register from logged users
const routes: Routes = [
  {path: '', pathMatch:'full', canActivate: [ LandingGuard ], component: LandingPageComponent},
  {path: 'login', canActivate: [ LandingGuard ], component: LoginComponent},
  {path: 'register', canActivate: [ LandingGuard ], component: RegisterComponent},
  {path: 'news', component: NewsComponent},
  {path: 'dashboard',  canActivate: [ AuthGuard ], component: DashboardComponent},

  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    DashboardComponent,
    HeroesComponent,
    ErrorPageComponent,
    BoxComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    AuthenticationModule
  ],
  exports: [RouterModule,
    NewsComponent,
    LoginComponent
  ],
  providers:[
    ValidatePassword,
    AuthGuard,
    LandingGuard
  ]
})
export class RoutingModule {
}

