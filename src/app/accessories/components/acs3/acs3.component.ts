import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acs3',
  templateUrl: './acs3.component.html',
  styleUrls: ['./acs3.component.css']
})
export class Acs3Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Rucksack Print",
    description: "100% ПОЛИЭСТЕР",
    price: 8300,
    img: "assets/img2/10023239494.jpg"
  }

}
