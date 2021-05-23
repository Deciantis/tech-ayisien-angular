import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //Tout bagay no vle sonje pou nou fe
  todos = [];

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }
  
//Pou nou mete na list nou
  addTodo(bagaySa){
    this.todos.push(bagaySa);
    this.meteConsole();
  }

  meteConsole(){
    this.todos.forEach((bagay) =>{
          console.log(bagay);
    });

  }
}
