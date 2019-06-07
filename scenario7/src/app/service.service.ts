import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public message;
  constructor() { }
  sharedData: any = new Subject();
  
  
}
