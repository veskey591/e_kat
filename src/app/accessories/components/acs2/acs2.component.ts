import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acs2',
  templateUrl: './acs2.component.html',
  styleUrls: ['./acs2.component.css']
})
export class Acs2Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Go 2 Backpack Print",
    description: "100% ПОЛИЭСТЕР",
    price: 5600,
    img: "assets/img2/10019901499.jpg"
  }

}
