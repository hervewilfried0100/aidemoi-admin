import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-am-dialog',
  templateUrl: './am-dialog.component.html',
  styleUrls: ['./am-dialog.component.css']
})
export class AmDialogComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  onSave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  saveEmit(): void {
    this.onSave.emit();
  }

}
