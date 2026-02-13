import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(p: any, wish: string): string {
    if(p.gender=="m"){
      return `Hello Mr. ${p.name}, ${wish}`;
    }
    else{
      return `Hello Ms. ${p.name}, ${wish}`;
    }
  }

}
