import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
 // styles: [`img`]
})
export class CustomCardComponent implements OnInit {

  @Input()
  services: any[];

  @Input()
  mensaje: string;

  @Input()
  cardWidth: string;

  @Output()
  selectedCard = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedCardItem(item: any): any {
    this.selectedCard.emit(item);
  }

}
