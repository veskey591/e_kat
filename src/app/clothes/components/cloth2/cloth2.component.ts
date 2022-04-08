import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloth2',
  templateUrl: './cloth2.component.html',
  styleUrls: ['./cloth2.component.css']
})
export class Cloth2Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Social Diner Tee White",
    description: "100% ХЛОПОК",
    price: 4200,
    img: "assets/img1/10022934102.jpg"
  }

}
