import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalConstants } from '../shared/global-constants';
//import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from './../services/user.service';
import { SnackbarService } from './../services/snackbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any = FormGroup;
  responseMessage: any;

  registerSucess: boolean = false;
  isButtonVisible = true;

  constructor(
    private formBulider: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBulider.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
    });
  }

  handleSubmit() {
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email,
    };

    this.userService.forgotPassword(data).subscribe(
      (response: any) => {
        //this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = GlobalConstants.emailSend;
        this.snackbarService.openSnackBar(this.responseMessage, '');
      },
      (error: { error: { message: any } }) => {
        //this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
    this.registerSucess = true;
    this.isButtonVisible = false;
  }
}
