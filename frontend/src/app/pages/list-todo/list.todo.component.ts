import { Component, Input, OnInit } from '@angular/core';
import { ListTodoService } from '../todo.service';
import { Task } from '../list-todo/list.todo.interface';
import { saveAs } from 'file-saver';

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

  ngOnInit(): void {
    this.getList();
    this.getListCompleted();
  }

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
      .submitEditTask(
        this.idTaskToEdit,
        this.nameInputValue,
        this.descriptionInputValue
      )
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

  editFieldView(id: string, name: string, description: string) {
    this.isOpenFieldView = true;
    this.idTaskToEdit = id;
    this.nameInputValue = name;
    this.descriptionInputValue = description;
    this.typeForm = 'edit';
  }

  deleteTask(id: string) {
    this.listTodoService.deleteTask(id).subscribe(() => {
      this.getList();
      this.getListCompleted();
    });
  }

  openFieldView(type: string) {
    this.isOpenFieldView = true;
    this.nameInputValue = '';
    this.descriptionInputValue = '';
    this.typeForm = type;
  }

  closeForm() {
    this.isOpenFieldView = !this.isOpenFieldView;
  }

  downloadFile() {
    let data = this.taskList.concat(this.taskListCompleted);

    const replacer = (key: any, value: any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'myFile.csv');
  }
}
