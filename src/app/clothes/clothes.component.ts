import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent{

  clothes: { name: string, img: string, price: number, link: string}[] =
    [
      {
        name: "Social Diner Tee Black",
        img: "assets/img1/10022934001.jpg",
        price: 4200,
        link: "/cloth1"
      },
      {
        name: "Social Diner Tee White",
        img: "assets/img1/10022934102.jpg",
        price: 4200,
        link: "/cloth2"
      },
      {
        name: "Comic Chuck Tee White",
        img: "assets/img1/10022936102.jpg",
        price: 3500,
        link: "/cloth3"
      },
    ]

}
