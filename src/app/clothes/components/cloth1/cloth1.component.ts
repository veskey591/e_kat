import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloth1',
  templateUrl: './cloth1.component.html',
  styleUrls: ['./cloth1.component.css']
})
export class Cloth1Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Social Diner Tee Black",
    description: "100% ХЛОПОК",
    price: 4200,
    img: "assets/img1/10022934001.jpg"
  }

}
