import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randmNum: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.randmNum = Math.random();
  }

  updateNumCapture(num: number) {
    this.randmNum = num;
  }
}
