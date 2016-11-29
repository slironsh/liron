import {Component, ViewEncapsulation} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/

export class AppComponent{
  title = 'Homework Assignment';
  subtitle='To Do List';
  description="My todo list for the last semester.";
  mako="http://www.mako.co.il/news?partner=NavBar";
  walla="http://www.walla.co.il";
  newTodo: string;
  isEmpty: boolean;
  todos: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
    this.isEmpty=true;
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.isEmpty=false;
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.cleanIfEmpty();
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
    this.cleanIfEmpty();
  }

   cleanIfEmpty(){
    if(!(this.todos.length>0)){
      this.isEmpty=true;
    }
  }
  newWindow(href){
    window.open(href);
    return false;
  }
  removeAssignmentMessage(index){
    document.getElementById(index).innerHTML="[X] Remove Assignment";
  }

  iconRemoveAssignment(index) {
    document.getElementById(index).innerHTML="[X]";
  }

}

@Component({
  selector: 'second-cmp',
  template: `
    <div class="rempve_icon">First Component </div>
    <style> { border: blue 2px solid; }</style>`
  /* moduleId: module.id,
   selector: 'second-cmp',
   template: `
   <div span="glyphicon glyphicon-remove">First Component</div>
   <style> { border: blue 2px solid; }</style>`,
   styleUrls: ['http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css']*/
})
export class SecondComponent {
  constructor() { }
}
/*export class AppComponent {
  title="Homework Assignment";
  h2="To Do List";
  p1="work just fine2";
  newTodo: string;
  todos: any;
  todoObj: any;

}*/
