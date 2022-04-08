import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acs1',
  templateUrl: './acs1.component.html',
  styleUrls: ['./acs1.component.css']
})
export class Acs1Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Straight Edge Backpack",
    description: "100% ПОЛИЭСТЕР",
    price: 4800,
    img: "assets/img2/10017270467.jpg"
  }

}
