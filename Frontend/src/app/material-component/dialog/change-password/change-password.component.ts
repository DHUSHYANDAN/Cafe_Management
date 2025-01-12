import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  oldPassword = true;
  newPassword = true;
  confirmPassword = true;
  changePasswordForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private router: Router,
    private formBulider: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.changePasswordForm = this.formBulider.group({
      oldPassword: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    });
  }

  validateSubmit() {
    if (
      this.changePasswordForm.controls['newPassword'].value !=
      this.changePasswordForm.controls['confirmPassword'].value
    ) {
      return true;
    } else {
      return false;
    }
  }

  handlePasswordChangeSubmit() {
    var formDate = this.changePasswordForm.value;
    var data = {
      oldPassword: formDate.oldPassword,
      newPassword: formDate.newPassword,
      confirmPassword: formDate.confirmPassword,
    };

    this.userService.changePassword(data).subscribe(
      (response: any) => {
        this.responseMessage = response?.message;
        this.dialogRef.close();
        //alert('Successfully Login');
        this.router.navigate(['/cafe/dashboard']);
        this.responseMessage = GlobalConstants.passwordChanged;
        this.snackbarService.openSnackBar(this.responseMessage, 'success');
      },
      (error) => {
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          //alert(this.responseMessage + ' ' + GlobalConstants.error);
          this.responseMessage = GlobalConstants.oldPasswordError;
          this.snackbarService.openSnackBar(
            this.responseMessage,
            GlobalConstants.error
          );
        }
      }
    );
  }
}
