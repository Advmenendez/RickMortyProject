import { UserRegister } from './../../models/model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userRegisterForm!: FormGroup;
	public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z$@$!%*?&].{8,}')]],
    });
 }


  ngOnInit(): void {}
  public onSubmit(): void {
    this.submitted = true;
    if (this.userRegisterForm.valid) {
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
      };
      console.log(user);
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
