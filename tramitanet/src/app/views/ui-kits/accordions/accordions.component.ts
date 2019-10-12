import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  animations: [SharedAnimations]
})
export class AccordionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
