import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public loginGroup: FormGroup;
  public passwordInput: string;
  public userData: any;
  public toaster: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _service: AuthService,
    private _route: Router,
    private _toastrService: ToastrService
  ) {
    this.loginGroup = this.getGroups();
    this.passwordInput = 'password'
  }

  public getGroups() {
    return this._fb.group({
      userName: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    })

  }

  ngOnInit(): void {
    this._service.getUsers().subscribe((data) => this.userData = data)
  }

  public get getControls() {
    return this.loginGroup['controls']
  }

  public onSubmit() {
    this._service.validUser = this.userData.find((data: any) => this.loginGroup.value.userName === data.name && this.loginGroup.value.password === data.password)
    this._service.validUser ? this._toastrService.success(``, 'Login Successfull') : this._toastrService.error(`User is not registered, go to Signup Page`, 'Unregistered User')
    this._route.navigateByUrl('/home');
  }

  public onShow() {
    this.passwordInput === 'password' ? this.passwordInput = 'text' : this.passwordInput = 'password';
  }

  public show() {
    this.toaster === false ? this.toaster = true : this.toaster = false
  }
}
