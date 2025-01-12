import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalConstants } from '../shared/global-constants';
import { UserService } from './../services/user.service';
import { SnackbarService } from './../services/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  password = true;
  confirmPassword = true;
  signupForm: any = FormGroup;
  responseMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private SnackbarService: SnackbarService,
    public dialogRef: MatDialogRef<SignupComponent> //private ngxService:NgxUiLoaderService,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, Validators.required],
      contactNumber: [null, [Validators.required]],
      password: [null, Validators.required],
      confirmPassword: [null, [Validators.required]],
    });
  }
  validateSubmit() {
    if (
      this.signupForm.controls['password'].value !=
      this.signupForm.controls['confirmPassword'].value
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    //this.ngxService.start();
    var formDate = this.signupForm.value;
    var data = {
      name: formDate.name,
      email: formDate.email,
      contactNumber: formDate.contactNumber,
      password: formDate.password,
    };

    this.UserService.signup(data).subscribe(
      (response: any) => {
        //this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = GlobalConstants.signupSuccess;
        this.SnackbarService.openSnackBar(this.responseMessage, '');
        this.router.navigate(['/cafe/login']);
      },
      (error: { error: { message: any } }) => {
        //this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        alert(this.responseMessage + ' ' + GlobalConstants.error);
        this.SnackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }
}
