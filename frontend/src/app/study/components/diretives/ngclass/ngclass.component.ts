import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {
  check:boolean = false;
  
  onClick(){
    this.check = !this.check;
  }
}
