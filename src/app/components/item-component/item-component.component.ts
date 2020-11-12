import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() urlImage;
  @Input() firstName;
  @Input() name;
  @Output() sendDataItemToList = new EventEmitter();
  constructor() { }

  sendData() {
    this.sendDataItemToList.emit(
     {urlImage : this.urlImage,
      firstName: this.firstName,
      name: this.name});}
  ngOnInit(): void {
  }

}
