import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
})
export class Cmp1Component implements OnInit {
  constructor() {}

  @Input() randmNum = 0;
  @Output() updateNum = new EventEmitter<number>();
  ngOnInit(): void {}
  updateCmp1() {
    this.randmNum = 1 + this.randmNum;
    this.updateNum.emit(this.randmNum);
  }
}
