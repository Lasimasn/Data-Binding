import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  providers:[ServiceService],
  // directives:[Component2Component,Component3Component],
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
