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
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4), ]],
      email: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), ]],
      tlf: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), ]],
    });
 }


  ngOnInit(): void {}
  public onSubmit(): void {
    this.submitted = true;
    if (this.userRegisterForm.valid) {
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        email: this.userRegisterForm.get('email')?.value,
        tlf: this.userRegisterForm.get('tlf')?.value,
      };
      console.log(user);
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
