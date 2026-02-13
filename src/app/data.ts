import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {

  message: string = "Hello from Service!";

  getMessage() {
    return this.message;
  }

  setMessage(msg: string) {
    this.message = msg;
  }
}
