import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular SPA webapp';
  name:String = 'Efren Arana';
  description: string = 'Curso de Angular Avanzado';
}
