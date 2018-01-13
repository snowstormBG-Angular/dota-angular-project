import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//services
import {ValidatePassword} from './components/public/register-form/validate-password';
import {AuthenticationModule} from "./services/auth.module";

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
import { BoxComponent } from './components/private/dashboard/box/box.component';
import { ItemsComponent } from './components/private/items/items.component';
import { PortraitComponent } from './components/private/heroes/portrait/portrait.component';
import { ItemComponent } from './components/private/items/item/item.component';
import { DetailsPageComponent } from './components/private/heroes/details-page/details-page.component';


const routes: Routes = [
  {path: '', pathMatch:'full', canActivate: [ LandingGuard ], component: LandingPageComponent},
  {path: 'login', canActivate: [ LandingGuard ], component: LoginComponent},
  {path: 'register', canActivate: [ LandingGuard ], component: RegisterComponent},
  {path: 'news', component: NewsComponent},
  {path: 'dashboard',  canActivate: [ AuthGuard ], component: DashboardComponent},
  {path: 'heroes', canActivate:[AuthGuard], component: HeroesComponent},
  {path: 'heroes/:id', canActivate:[AuthGuard], component: DetailsPageComponent},
  {path: 'items', canActivate:[AuthGuard], component: ItemsComponent},

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
    ItemsComponent,
    PortraitComponent,
    ItemComponent,
    DetailsPageComponent,
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

