import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {

  accessories: { name: string, img: string, price: number, link: string}[] =
    [
      {
        name: "Straight Edge Backpack",
        img: "assets/img2/10017270467.jpg",
        price: 4800,
        link: "/acs1"
      },
      {
        name: "Go 2 Backpack Print",
        img: "assets/img2/10019901499.jpg",
        price: 5600,
        link: "/acs2"
      },
      {
        name: "Rucksack Print",
        img: "assets/img2/10023239494.jpg",
        price: 8100,
        link: "/acs3"
      },
    ]
}
