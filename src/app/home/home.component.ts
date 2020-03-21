import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private options: Array<boolean> = [true, false, false, false];

  constructor() { }

  ngOnInit() {}

  desactiveShows(){
    console.log(this.options);
    for (let index = 0; index < this.options.length; index++) {
      this.options[index] = false;
    }
    console.log(this.options);
  }

  whatIsIt(){
    this.desactiveShows();
    this.options[1] = true;
  }

  symptom(){
    this.desactiveShows();
    this.options[2] = true;
  }

  transmission(){
    this.desactiveShows();
    this.options[3] = true;
  }
  

}
