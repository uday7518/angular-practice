import { Component } from '@angular/core';
import { Data } from '../data';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  msg = '';
  constructor(private dataService: Data) {
    this.msg = this.dataService.getMessage();
  }

}
