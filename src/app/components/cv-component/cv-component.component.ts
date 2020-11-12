import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  firstName;
  urlImage;
  name;
  processSonData(data){
  this.firstName=data.firstName;
  this.name=data.name;
  this.urlImage=data.urlImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
