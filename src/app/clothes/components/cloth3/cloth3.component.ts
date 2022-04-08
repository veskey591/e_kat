import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloth3',
  templateUrl: './cloth3.component.html',
  styleUrls: ['./cloth3.component.css']
})
export class Cloth3Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Comic Chuck Tee White",
    description: "100% ХЛОПОК",
    price: 3500,
    img: "assets/img1/10022936102.jpg"
  }

}
