import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ListTodoService } from '../todo.service';
import { Task } from '../list-todo/list.todo.interface';

@Component({
  selector: 'list-todo',
  templateUrl: 'list-todo.component.html',
  styleUrls: ['list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  public taskList!: Task[];
  private idTaskToEdit: string = '';
  taskListCompleted!: Task[];
  isOpenFieldView: boolean = false;
  typeForm: string = '';
  inputNameTask: string = '';
  nameInputValue: string = '';
  descriptionInputValue: string = '';

  constructor(private listTodoService: ListTodoService) {}

  getList = () => {
    this.listTodoService.getList().subscribe((response) => {
      this.taskList = response;
    });
  };

  getListCompleted() {
    this.listTodoService.getListCompleted().subscribe((response) => {
      this.taskListCompleted = response;
    });
  }

  submitNewTask() {
    this.listTodoService
      .submitNewTask(this.nameInputValue, this.descriptionInputValue)
      .subscribe(() => {
        this.getList();
        this.getListCompleted();
      });
  }

  submitEditTask() {
    this.listTodoService
      .submitEditTask(this.idTaskToEdit, this.nameInputValue, this.descriptionInputValue)
      .subscribe(() => {
        this.getList();
        this.getListCompleted();
      });
  }

  listenerNameValue(event: any) {
    this.nameInputValue = event.target.value;
  }

  listenerDescValue(event: any) {
    this.descriptionInputValue = event.target.value;
  }

  changeStatus(id: string, active: boolean) {
    let changedTask = this.listTodoService
      .changeStatus(id, active)
      .subscribe((response) => {
        this.getList();
        this.getListCompleted();
      });
  }

  deleteTask(id: string) {
    this.listTodoService.deleteTask(id).subscribe(() => {
      this.getList();
      this.getListCompleted();
    });
  }

  openFieldView(type: string) {
    this.isOpenFieldView = !this.isOpenFieldView;
    this.nameInputValue = '';
    this.descriptionInputValue = '';
    this.typeForm = type;
  }

  editFieldView(id: string,name: string, description: string) {
    this.isOpenFieldView = !this.isOpenFieldView;
    this.idTaskToEdit = id;
    this.nameInputValue = name;
    this.descriptionInputValue = description;
    this.typeForm = 'edit';
  }

  ngOnInit(): void {
    this.getList();
    this.getListCompleted();
  }
}
