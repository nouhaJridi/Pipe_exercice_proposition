import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() name ;
 @Input() firstName;
 @Input() age ;
 @Input() urlImage;
  constructor() { }

  ngOnInit(): void {
  }

}
