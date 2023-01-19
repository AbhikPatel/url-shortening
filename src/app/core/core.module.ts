import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/master/footer/footer.component';
import { HeaderComponent } from './components/master/header/header.component';
import { MasterComponent } from './components/master/master.component';



@NgModule({
  declarations: [
    MasterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
