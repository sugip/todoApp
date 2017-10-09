import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Task } from '../Task';
import { TodoService } from '../todo.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  tasks: Task[];
  errorMessage: String;

  titleFormControl = new FormControl('', [Validators.required]);

  constructor(private todoService: TodoService, private toastrService: ToastrService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.show();
  }
  show() {
    this.loadingService.startLoading();    
    this.todoService.getTodo()
    .subscribe(
      tasks => this.tasks = tasks,
      error => this.showErrorMessage(),
      () => this.loadingService.endLoading()
    );
  }
  onDeleted(task) {
    this.todoService.deleteTodo(task.id)
    .subscribe(
      success => {
        task.state = 'deleted';
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index);
        
        // this.show(); // アニメーションのことを考えるとlistから除外がいい
        this.showSuccessMessage('"' + task.title + '" is deleted.');
      },
      error => this.showErrorMessage()
    );
  }

  add(titleObj) {
    let title:string = titleObj.value;
    if (this.titleFormControl.hasError('required')) {
      return;
    }
    this.loadingService.startLoading();
    this.todoService.addTodo(title).subscribe(
      task => {
        task.state = 'created';
        this.tasks.push(task);
        titleObj.value = undefined;
        this.showSuccessMessage('"' + title + '" is added.');
        this.titleFormControl.reset();
        this.loadingService.endLoading();
      },
      error => this.showErrorMessage()
    )
  }
  showSuccessMessage(msg:string) {
    this.toastrService.success(msg, 'SUCCESS!');
  }
  showErrorMessage() {
    this.toastrService.error('Something went wrong..', 'ERROR!');
  }

}
