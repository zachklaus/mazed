import { Component, OnInit } from '@angular/core';
import { FormControl, 
         Validators, 
         ValidatorFn, 
         ValidationErrors, 
         AbstractControl, 
         FormGroup,
         FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-creation-form',
  templateUrl: './account-creation-form.component.html',
  styleUrls: ['./account-creation-form.component.scss']
})
export class AccountCreationFormComponent implements OnInit {
  
  submitted = false;
  usernameRegex = new RegExp('[a-zA-Z0-9_]*');
  createAccountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createAccountForm =  this.formBuilder.group({
      username: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z0-9_]*')
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(72),
      ]],
      confirmPassword: [null, [
        Validators.required,
       this.confirmPasswordMatchesPassword()
      ]]
    });
  }

  ngOnInit(): void {
    this.createAccountForm.get('password')?.valueChanges.subscribe(selectedValue => {
      this.createAccountForm.controls.confirmPassword.updateValueAndValidity()
    })
  }

  submit() { 
    this.submitted=true;
  }

  confirmPasswordMatchesPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== this.createAccountForm?.controls.password.value) {
        return {dontMatch: true}
      }
      else 
        return null;
    };
  };
}