import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  listaFrutas = [
    {
      title: 'Manzana',
      description: 'Frutas del valle',
      image: 'https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png'
    },
    {
      title: 'Naranja', 
      description: 'Naranjas de buga', 
      image: 'https://www.fruteriaelvergel.com/WebRoot/StoreES2/Shops/64945569/5823/0310/DA57/79E5/2AA0/C0A8/2BBA/CB08/1007-pera-limonera-el-vergel-cantabro.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
