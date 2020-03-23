import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private options: Array<boolean> = [true, false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() { }

  desactiveShows() {
    for (let index = 0; index < this.options.length; index++) {
      this.options[index] = false;
    }
  }

  whatIsIt() {
    this.desactiveShows();
    this.options[1] = true;
  }

  symptom() {
    this.desactiveShows();
    this.options[2] = true;
  }

  transmission() {
    this.desactiveShows();
    this.options[3] = true;
  }

  vulnerableGroups() {
    this.desactiveShows();
    this.options[4] = true;
  }

  treatment() {
    this.desactiveShows();
    this.options[5] = true;
  }

  protectMe() {
    this.desactiveShows();
    this.options[6] = true;
  }

  mask() {
    this.desactiveShows();
    this.options[7] = true;
  }

  haveSymptoms() {
    this.desactiveShows();
    this.options[8] = true;
  }

}
