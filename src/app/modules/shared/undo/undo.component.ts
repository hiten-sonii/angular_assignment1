import {
  Component,
  ComponentRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-undo',
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.css'],
})
export class UndoComponent implements OnInit {
  @Output() emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  undo() {
    this.emitter.emit(true);
  }
}
