import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(public _service: ServiceService) { }

  ngOnInit() {
  }

  onClick(data)
  {
    this._service.sharedData.next(data);
  }
}
