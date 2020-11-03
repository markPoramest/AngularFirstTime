import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Todo } from 'src/app/components/user/user.component';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {

   }
   getTodoList(){
     return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
   }
}
