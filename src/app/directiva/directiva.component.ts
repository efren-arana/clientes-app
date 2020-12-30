import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent implements OnInit {

  enable: boolean = true;
  listCurso: string[] = [
    "TypeScript",
    "Java EE",
    "Dart",
    "Flutter",
    "JavaScript"
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setEnable() :void {
    this.enable = (this.enable) ? false : true;
  }

}
