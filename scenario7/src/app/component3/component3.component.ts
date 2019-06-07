import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
// @Output() public childEvent=new EventEmitter();
public output;
  constructor(private _service:ServiceService) { }

  ngOnInit() {
    this._service.sharedData.subscribe(data =>
      {
        this.output=data;
      })
    }
     
  

}
