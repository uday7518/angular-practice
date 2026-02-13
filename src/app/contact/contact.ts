import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 constructor(private dataService: Data) {}

  changeMessage() {
    this.dataService.setMessage("Message changed from Contact Component!");
  }
}
