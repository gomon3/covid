import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class HomeComponent implements OnInit {

  options: Array<boolean> = [false, true, false, false];

  constructor() { }

  ngOnInit() { }

  hideAll(){
    for (let i = 0; i < this.options.length; i++) {
      this.options[i] = false;
    }
  }

  outstandingNews() {
    this.hideAll();
    this.options[0] = true;
  }

  covid() {
    this.hideAll();
    this.options[1] = true;
  }

  statistics() {
    this.hideAll();
    this.options[2] = true;
  }

  otherActions() {
    this.hideAll();
    this.options[3] = true;
  }

}
