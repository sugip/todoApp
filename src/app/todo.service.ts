import { Injectable } from '@angular/core';
import { Task } from './Task';
import { Http, Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TodoService {
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/tasks/';

  constructor(private http: Http) { }

  public getTodo():Observable<Array<Task>> {
    return this.http.get(this.url).retry(3).map(response => response.json() as Task[]);
  }

  public addTodo(title:string):Observable<Task> {
    let request = {title: title}
    return this.http.post(this.url, request).retry(3).map(response => response.json() as Task);
  }

  public deleteTodo(id: string):Observable<Array<Task>> {
    return this.http.delete(this.url + id).retry(3).map(response => response.json() as Task[]);
  }
}
