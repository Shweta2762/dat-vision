import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService, UserResponse, ResetPasswordInput } from 'src/app/authentication/authentication.service'
import { ResetPassswordComponent } from 'src/app/reset-passsword/reset-passsword.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss']
})
export class UserTemplateComponent implements OnInit {
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthenticationService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  public email  : string = "";
  public name   : string = "";
  public role   !: number;

  ngOnInit() {
    this.authService.userDetails().subscribe((data : UserResponse)=> {
      this.email  = data.email;
      this.name   = data.name;
      this.role   = data.role;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {});
  }

  public signOutEmit(): void {
    this.signOut.emit();
  }

  resetPasswordDialog() {
    const dialogRef = this.dialog.open(ResetPassswordComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe( (result) => {
      console.log('Dialog result');
      if(result){
        const body: ResetPasswordInput = {
          oldPassword: result.currentPassword,
          newPassword : result.newPassword
        }
        this.resetPassword(body);
      }
      console.log(result);
    });
  }

  async resetPassword(body : any) {
    console.log("Reset Password Body : ")
    console.log(body)
    const test = await this.authService.resetPassword(body).subscribe(
      (data) =>{
        this.authService.logout();
        console.log(data);
        // this.auth.logout();
      },
      (err) => {
        console.error(err);
        if(err && err.statusText === "Bad Request"){
          this.openSnackBar("Incorrect Password", "OK");
        }
        else if(err && err.status){
          this.openSnackBar("Oops! Password Change Failed", "OK");
        }
      }
    );
    console.log(test)
  }
}
