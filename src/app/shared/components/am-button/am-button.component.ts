import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type amButtonType = 'primary' | 'default';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'am-button',
  templateUrl: './am-button.component.html',
  styleUrls: ['./am-button.component.css']
})
export class AmButtonComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  type: amButtonType = 'primary';

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.clickEvent.emit();
  }

  ngOnInit(): void {}

}
