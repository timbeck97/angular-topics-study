import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  courses:string[] = ['Angular', 'ReactJs', 'Java', 'Spring Boot', 'PostgreSQL']
}
