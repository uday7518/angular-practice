import { CommonModule } from '@angular/common';
import { Component, Output, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterOutlet ,RouterLink} from '@angular/router';
import { TestPipe } from './test-pipe';
import { Header } from './header/header';
import { HttpClient } from '@angular/common/http';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';
import { Child } from './child/child';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule,TestPipe,Header,RouterLinkActive,RouterLink,TodoForm,TodoList,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoApp');
  constructor(private http: HttpClient) {
  }
  data:any=null;
  getdata(){
    this.http.get('https://fakestoreapi.com/products?limit=5')
    .subscribe((data)=>{
      this.data=data
    })
  }
  name="uday";
  id=1;
  user = {
    name: '',
    email: ''
  };

  onSubmit(form: any) {
    console.log('Form Submitted!');
    console.log(this.user);
    console.log(form);
  }

}
