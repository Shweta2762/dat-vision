import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService, LoginDetails } from "src/app/authentication/authentication.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthenticationService, private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {});
  }

  passwordVisibility: boolean = false;
  loginForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
  });

  ngOnInit() {

  }
  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  async login(formData: LoginDetails) {
    this.auth.login(formData).subscribe({
      next: (data) => {
        this.router.navigateByUrl("").then(() => {
          window.location.reload();
        });
        console.log(data);
      },
      error: (err) => {
        console.error(err);
        if (err && err.statusText && (err.statusText === "Unprocessable Entity" || err.statusText === "Unauthorized" || err.statusText === "Bad Request")) {
          this.openSnackBar("Incorrect Username or Password", "OK");
        }
        else if (err && err.status) {
          this.openSnackBar("Oops! Login Failed. ERR_CODE: LOGIN_FAILED", "OK");
        }
      }
    });
  }

  isChecked() {
    return true;
  }
}
