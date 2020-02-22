import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminFull } from '../models/admin-full.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


/**
 * @desc Component containing the registrationform, it's input fields and validation.
 * @Output Indicates user submitted the form, or pressed Login with existing user.
 */

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.fb.group({
    firstName: ['', [Validators.minLength(2), Validators.required]],
    lastName: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(10), Validators.required]],
  });


  @Output() onRegUser:EventEmitter<string> = new EventEmitter<string>();

  newUser:AdminFull;



  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

  /**
   * @desc Creates a new AdminFull object containing the input values from the form, then push it to
   * the admins array in AuthService.
   */

  onClickSubmit() {

    this.newUser = new AdminFull(
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.email, 
      this.registrationForm.value.password);

    this.auth.admins.push(this.newUser);
    
    this.onRegUser.emit();
  }
  onClickLogin() {
    this.onRegUser.emit();
  }

  /**
   * @desc Define GET methods to get easy access to the states of the inputs in the template.
   */
  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
}
