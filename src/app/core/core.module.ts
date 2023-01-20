import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/master/footer/footer.component';
import { HeaderComponent } from './components/master/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { LoginGuard } from './guards/login.guard';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    MasterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
    })
  ],
  providers: [
    AuthService,
    LoginGuard,
  ]
})
export class CoreModule { }
