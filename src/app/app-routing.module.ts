import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MasterComponent } from './core/components/master/master.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:MasterComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
