import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    id: string | null = '';

  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
  this.id = params.get('id');
});
  }

}
