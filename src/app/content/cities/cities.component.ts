import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {

  dataList = [
    {
      title: 'Bicicleta',
      description: 'Bicicleta deportiva',
      image: 'https://www.ecestaticos.com/image/clipping/7aa2b48dc1748473cccc513a7c1dcc5f/colapso-en-el-mundo-de-las-bicis-la-explosion-en-la-demanda-deja-a-las-tiendas-sin-stock.jpg'
    },
    {
      title: 'Automóvil',
      description: 'Automóvil familiar',
      image: 'https://www.ecestaticos.com/image/clipping/7aa2b48dc1748473cccc513a7c1dcc5f/colapso-en-el-mundo-de-las-bicis-la-explosion-en-la-demanda-deja-a-las-tiendas-sin-stock.jpg'
    },
    {
      title: 'Motocicleta',
      description: 'Motocicleta',
      image: 'https://www.ecestaticos.com/image/clipping/7aa2b48dc1748473cccc513a7c1dcc5f/colapso-en-el-mundo-de-las-bicis-la-explosion-en-la-demanda-deja-a-las-tiendas-sin-stock.jpg'
    }
  ];

  valueCard: any;

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedCardItem(value: any): void {
    this.valueCard = value;
  }
}
