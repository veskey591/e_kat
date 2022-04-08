import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cros2',
  templateUrl: './cros2.component.html',
  styleUrls: ['./cros2.component.css']
})
export class Cros2Component {
  goods: { name: string, description: string, price: number, img: string } = {
    name: "Chuck Taylor All Star Cx Stretch Canvas",
    description: "ВЕРХ: 73%ХЛОПОК15%НЕЙЛОН12%СПАНДЕК  СНИЗ: 100%ЭВА",
    price: 13000,
    img: "assets/img/172799.jpg"
  }

}
