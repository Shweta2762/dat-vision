import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
import { AuthenticationService } from "src/app/authentication/authentication.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-passsword',
  templateUrl: './reset-passsword.component.html',
  styleUrls: ['./reset-passsword.component.scss']
})
export class ResetPassswordComponent implements OnInit {



  constructor(
    private auth: AuthenticationService, private router: Router, private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,

    public dialogRef: MatDialogRef<ResetPassswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  readonly PASS_MIN_LENGTH = 6;
  readonly PASS_MAX_LENGTH = 100;

  resetPasswordForm: FormGroup = this.formBuilder.group({
    currentPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(this.PASS_MIN_LENGTH),
      Validators.maxLength(this.PASS_MAX_LENGTH),
    ]),
    newPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(this.PASS_MIN_LENGTH),
      Validators.maxLength(this.PASS_MAX_LENGTH),
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(this.PASS_MIN_LENGTH),
      Validators.maxLength(this.PASS_MAX_LENGTH),
    ]),
  },{validator: passwordMatchValidator}
  );

  resetPasswordVisibility:boolean= false;
  newPasswordVisibility:boolean= false;
  confirmPasswordVisibility:boolean= false;

  ngOnInit() {
  }

  toggleResetPasswordVisibility(){
     this.resetPasswordVisibility=!this.resetPasswordVisibility;
  }
  toggleNewPasswordVisibility(){
    this.newPasswordVisibility=!this.newPasswordVisibility;
  }
  toggleConfirmPasswordVisibility(){
    this.confirmPasswordVisibility=!this.confirmPasswordVisibility;
  }

  onPasswordInput(){
    if (this.resetPasswordForm.hasError('passwordMismatch'))
      this.resetPasswordForm.get('confirmPassword')?.setErrors([{'passwordMismatch': true}]);
    else
      this.resetPasswordForm.get('confirmPassword')?.setErrors(null);
  }

  isChecked(){
    return true;
  }

}

export const passwordMatchValidator = (formGroup: FormGroup): ValidationErrors | null => {
  return formGroup.get('newPassword')?.value === formGroup.get('confirmPassword')?.value ?
    null : { 'passwordMismatch': true };
}
