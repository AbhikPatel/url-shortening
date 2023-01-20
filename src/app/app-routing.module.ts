import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MasterComponent } from './core/components/master/master.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    loadChildren: () => import(`./registration/registration.module`).then(m => m.RegistrationModule)
  },
  {
    path:'home',
    component:MasterComponent,
    canActivate:[LoginGuard],
    children:[
      {
        path:'',
        loadChildren:() => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
      }
    ]
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
