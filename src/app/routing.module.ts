import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//services
import {ValidatePassword} from './components/public/register-form/validate-password';

//components
//public
import {LandingPageComponent} from './components/public/landing-page/landing-page.component';
import {LoginComponent} from "./components/public/login-form/login.component";
import {RegisterComponent} from "./components/public/register-form/register.component";
import {NewsComponent} from './components/public/news/news.component';
//private
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { HeroesComponent } from './components/private/heroes/heroes.component';
import {AuthenticationModule} from "./services/auth.module";


//todo: add guards
//default auth
//guard login and register from logged users
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    AuthenticationModule
  ],
  exports: [RouterModule,
    NewsComponent
  ],
  providers:[
    ValidatePassword,
  ]
})
export class RoutingModule {
}

