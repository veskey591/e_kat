import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cros3',
  templateUrl: './cros3.component.html',
  styleUrls: ['./cros3.component.css']
})
export class Cros3Component {

  goods: { name: string, description: string, price: number, img: string } = {
    name: "Chuck Taylor All Star Mono Low-Top",
    description: "ВЕРХ: ТЕКСТИЛЬ НИЗ: РЕЗИНА",
    price: 9100,
    img: "assets/img/172808.jpg"
  }

}
