import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//services
import {ValidatePassword} from './components/public/register-form/validate-password';

//components
import {LandingPageComponent} from './components/public/landing-page/landing-page.component';
import {LoginComponent} from "./components/public/login-form/login.component";
import {RegisterComponent} from "./components/public/register-form/register.component";
import {NewsComponent} from './components/public/news/news.component';


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
    NewsComponent
  ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule, NewsComponent],
  providers:[
    ValidatePassword
  ]
})
export class RoutingModule {
}

