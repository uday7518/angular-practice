import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RouterLinkActive, RouterOutlet ,RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private r: Router) { }
  send() {
    this .r.navigate(['/contact']);
  }

}
