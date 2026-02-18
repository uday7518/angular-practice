import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLinkActive, RouterOutlet ,RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-header',
  imports: [RouterLinkActive,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private r: Router) { }
  send() {
    this .r.navigate(['/contact']);
  }
    loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
