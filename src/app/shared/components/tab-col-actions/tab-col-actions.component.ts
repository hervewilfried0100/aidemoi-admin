import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab-col-actions',
  templateUrl: './tab-col-actions.component.html',
  styleUrls: ['./tab-col-actions.component.css']
})
export class TabColActionsComponent implements OnInit {
  @Output()
  updateEmit = new EventEmitter();

  @Output()
  deleteEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  delete(): void{
    this.deleteEmit.emit();
  }

  update(): void {
    this.updateEmit.emit();
  }

}
