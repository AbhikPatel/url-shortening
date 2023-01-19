import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
