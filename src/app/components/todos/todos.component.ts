import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  private todos:Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  /**
   * Getter method to return the todo array.
   * @returns the orignal todo array.
   */
  getTodos() :Todo[] {
    return this.todos;
  }

  /**
   * When the to do item is clicked in the front end, this method should run to turn the
   * completed variable of the TODO object to false or true.
   * @param id the index number of the todo item we need to toggel on or off
   */
  toggleDone (id:number) :void {
    this.todos.map((v,i) => {
      if ( i == id ) {
        // console.log("Before: " + v.completed);
        v.completed = !v.completed;
        // console.log("After: " + v.completed);
      }
      return v;
    })
  }


  /**
   * When the remove button is clicked this method is called to delete the todo task
   * from the list.
   * @param id the index number of the todo item we need to delete.
   */
  deleteTodo (id:number) {
    if ( id > -1) {
      this.todos.forEach((v, i) => {
        if ( i == id ) {
          this.todos.splice(i,1);
        }
      })
    }
  }

  /**
   * 
   * @returns boolean if there is already a duplicate task in todo list.
   */
  private checkForDupTodo():boolean {
    for (let i = 0; i < this.todos.length; i++) {
      if ( this.todos[i].content == this.inputTodo) return true;
    }
    return false;

  }


  /**
   * When the Add Task button is clicked is method is called to add the task to the
   * todo (todos) array. If the inputTodo is empty then just return.
   */
  addTodo() {

    if ( this.checkForDupTodo() ) return;

    if ( this.inputTodo.length <= 0) return;

    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    
    this.inputTodo = "";
  }

}
