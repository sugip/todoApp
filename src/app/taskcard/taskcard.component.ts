import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.scss'],
  animations: [
    trigger('state', [
      transition('void => created', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
     ]),
      transition('created => deleted', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
     ]),
    ])
  ]
})
export class TaskcardComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleted = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDeleted.emit(this.task);
    this.task.state = 'deleted';
  }
}
