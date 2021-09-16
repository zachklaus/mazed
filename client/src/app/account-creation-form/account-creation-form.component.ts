import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-account-creation-form',
  templateUrl: './account-creation-form.component.html',
  styleUrls: ['./account-creation-form.component.scss']
})
export class AccountCreationFormComponent implements OnInit {
  
  submitted = false;
  username = "";
  email = "";
  password = "";
  confirmPassword = "";
  usernameRegex = new RegExp('[a-zA-Z0-9_]*');

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25),
    Validators.pattern('[a-zA-Z0-9_]*')
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(72)
  ]);

  confirmPasswordFormControl = new FormControl('', [
    Validators.required,
    this.confirmPasswordValidator()
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted=true;
    
  }

  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== this.password) {
        return {dontMatch: true}
      }
      else 
        return null;
    };
  };

}
