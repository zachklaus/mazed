import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted=true;}

}
