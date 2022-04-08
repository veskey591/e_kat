import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cros1',
  templateUrl: './cros1.component.html',
  styleUrls: ['./cros1.component.css']
})
export class Cros1Component {
  goods: { name: string, description: string, price: number, img: string } = {
    name: "Chuck Taylor All Star Ultra Mid",
    description: "ВЕРХ: 80%НЕЙЛОН 20%СПАНДЕКС НИЗ: 100%ЭВА",
    price: 11000,
    img: "assets/img/132174.jpg"
  }
}
