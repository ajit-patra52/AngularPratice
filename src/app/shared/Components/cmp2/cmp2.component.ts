import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss'],
})
export class Cmp2Component implements OnInit {
  @Input() randmNum = 0;
  @Output() updateNum = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  updateCmp2() {
    this.randmNum = 2 + this.randmNum;
    this.updateNum.emit(this.randmNum);
  }
}
