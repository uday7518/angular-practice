import { Component } from '@angular/core';
import { Data } from '../data';
import { ReactiveFormsModule, FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 constructor(private dataService: Data) {}

  changeMessage() {
    this.dataService.setMessage("Message changed from Contact Component!");
  }
  form = new FormGroup({
  skills: new FormArray([
    new FormControl('')
  ])
});
get skills() {
  return this.form.get('skills') as FormArray;
}
addSkill() {
  this.skills.push(new FormControl(''));
}
removeSkill(index: number) {
  this.skills.removeAt(index);
}

}
