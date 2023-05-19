import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  valorBinding:string='';
  twoWayBinding:string='';



  handleKeyUp(event:KeyboardEvent){
    this.valorBinding=(<HTMLInputElement>event.target).value;
  }
}
