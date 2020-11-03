import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String;
  age:number;
  email:String;
  //dictionary
  address:{
    street :string,
    city : string,
    province:  string,
    postcode : string
  }
  todoList:Todo[];
  //array
  skills:string[];
  constructor(private todoService:TodoService) { 

  }

  ngOnInit(): void {
    this.name = "Poramest";
    this.age = 22;
    this.email = "2411kjn@gmail.com" 
    this.address = {
      street: "51/469 Thatamnak",
      city : "Nakhon Chaisri",
      province : "Nakhon Pathom",
      postcode : "73120"
    }
    this.skills = ["Java", "Python"];
    //Call Servicesx
    this.todoService.getTodoList().subscribe((response)=>{
        this.todoList = response;
    });          
  }

  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill){
    this.skills.forEach((element,index)=>{
      if(element==skill)
        this.skills.splice(index,1);
    })
    return false;
  }


}


export interface Todo{
      userId: number;
      id: number;
      title: string;
      completed: boolean;
}




