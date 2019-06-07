import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Output() public parentEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  sendData(data2)
  {
      this.parentEvent.emit(data2);
  }

}
