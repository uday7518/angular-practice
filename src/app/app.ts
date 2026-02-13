import { CommonModule } from '@angular/common';
import { Component, Output, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterOutlet ,RouterLink} from '@angular/router';
import { TestPipe } from './test-pipe';
import { Header } from './header/header';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule,TestPipe,Header,RouterLinkActive,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoApp');
}
