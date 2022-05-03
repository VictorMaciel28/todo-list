import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from './list-todo/list.todo.interface';

@Injectable({
  providedIn: 'root',
})
export class ListTodoService {
  constructor(private http: HttpClient) {}

  URL = environment.apiURL;
  
  getList() {
    return this.http.get<Task[]>(this.URL + '/tasks');
  }

  getListCompleted() {
    return this.http.get<Task[]>(this.URL + '/tasks/completed');
  }

  submitNewTask(name: string, description: string) {
    return this.http.post<Task[]>(this.URL + '/tasks', {
      name,
      description,
      active: true,
    });
  }

  submitEditTask(id: string, name: string, description: string) {
    console.log(id);

    return this.http.put<Task[]>(this.URL + '/tasks', {
      id,
      name,
      description,
    });
  }

  changeStatus(id: string, active: boolean) {
    return this.http.put<Task[]>(this.URL + '/task/' + id, { active: active });
  }

  deleteTask(id: string) {
    return this.http.delete<Task[]>(this.URL + '/task/' + id);
  }
}
