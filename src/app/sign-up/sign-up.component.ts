import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataApiService } from '../app-data/data-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({});
  validEmailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  userData: any;
  signUpSuccess: boolean = false;
  // use this variable to add dynamic fields
  formFields = [
    {
      id: 'firstname',
      label: 'First name',
      value: ""
    },
    {
      id: 'lastname',
      label: 'Last name',
      value: ""
    },
    {
      id: 'email',
      label: 'Email address',
      value: ""
    }
  ]

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formFields.forEach(item => {
      item.id == "email" ? this.signUpForm.addControl(item.id, new FormControl(item.value, [Validators.required, Validators.pattern(this.validEmailPattern)]))
        : this.signUpForm.addControl(item.id, new FormControl(item.value, Validators.required));
    });

  }

  submit() {
    if (this.signUpForm.valid) {
      this.dataApiService.userSignUp(this.signUpForm.value).subscribe({
        next: (data) => {
          this.signUpSuccess = true;
          this.signUpForm.reset();
          this.buildForm();
        },
        error: (error) => {
          console.log("error: ", error);
        }
      })
    }
  }
}
