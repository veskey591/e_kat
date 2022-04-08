import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  goods: { name: string, img: string, price: number, link: string}[] =
    [
      {
        name: "Chuck Taylor All Star Ultra Mid",
        img: "assets/img/132174.jpg",
        price: 11000,
        link: "/cros1"
      },
      {
        name: "Chuck Taylor All Star Cx Stretch Canvas",
        img: "assets/img/172799.jpg",
        price: 13000,
        link: "/cros2"
      },
      {
        name: "Chuck Taylor All Star Mono Low-Top",
        img: "assets/img/172808.jpg",
        price: 9100,
        link: "/cros3"
      },
    ]

}
