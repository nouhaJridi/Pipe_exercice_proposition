import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})

export class ListeComponentComponent implements OnInit {
  @Output() sendDataToSon = new EventEmitter();

  constructor() { }

  processSonData(data){
    this.sendDataToSon.emit(data);
  }

  ngOnInit(): void {


  }


}
