import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../services/Datasharing.service';
import {User} from '../classes/user.classe';
import { ReactiveFormsModule } from '@angular/forms';
import {Store,select} from '@ngrx/store';
import {nSelectorId} from '../store/reducers/user.reducer';
import {  GetUserSuccessAction }  from '../store/actions/user.action';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signupForm: FormGroup;
u=new User();
    loginForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
               private userService: AuthService,
               private store:Store<any>,
               private router: Router,
             private dataSharingService: DataSharingService) { }


  ngOnInit(): void {
    		document.getElementById("defaultOpen").click();
    this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });
    this.initForm();
        //  this.store.subscribe(d=>console.log(d.user.fullname));
      //  this.store.select(nSelectorId).subscribe(h=>console.log("fsdx"+ h))

  }



  initForm() {
    this.signupForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email]],
      telnum: ['',  [Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern("[0-9]{8}")] ],
      fullname: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
           confirmPassword: ['', Validators.required]



    }
  );
  };

  onSubmit() {
  const user = new User();
    user.email = this.signupForm.get('email').value;
    user.fullname = this.signupForm.get('fullname').value;
    user.telnum = this.signupForm.get('telnum').value;
    user.password = this.signupForm.get('password').value;
    this.userService.createNewUser(user).then(
      () => {
           this.dataSharingService.isUserLoggedIn.next(true);
    this.store.dispatch(new GetUserSuccessAction(user));

          this.router.navigate(['monespace']);



      }
    ).catch(
      (error) => {

        this.errorMessage = error.message;
      }
    );
  }




      onLogin() {

      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
    this.u.email=email;
      this.userService.login(email, password).then(
        (d) => {

           this.dataSharingService.isUserLoggedIn.next(true);




             this.store.dispatch(new GetUserSuccessAction(this.u));

            this.router.navigate(['monespace']);
          //    this.store.dispatch(UserActions.GetUserSuccess(user));
        }
      ).catch(
        (error) => {

        }
      );
    }
}

/* verifiernumero(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }};*/

      /*  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }}*/
