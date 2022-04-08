import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  catalogs: {name:string, img: string, link: string} [] = 
  [
    {
      name: "Кросы",
      img: "assets/img/132174.jpg",
      link: "/goods"
    },
    {
      name: "Одежда",
      img: "assets/img1/10022934001.jpg",
      link: "/t_shirts"
    },
    {
      name: "Аксессуары",
      img: "assets/img2/10019901499.jpg",
      link: "/trinkets"
    },
  ]
}