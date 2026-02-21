import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {
  // Reactive form
 form!: FormGroup;   // declare first
  submitted = false;

  constructor(private fb: FormBuilder) {

    // ✅ initialize AFTER fb exists
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    }, {
      validators: this.passwordMatchValidator
    });

  }

  passwordMatchValidator(group: any) {
    const p = group.get('password')?.value;
    const cp = group.get('confirmPassword')?.value;
    return p === cp ? null : { passwordMismatch: true };
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    console.log(this.form.value);
    alert('Signup successful!');
    this.form.reset();
    this.submitted = false;
  }
  

}
