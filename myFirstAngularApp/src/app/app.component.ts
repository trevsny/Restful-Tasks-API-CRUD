import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { ReturnStatement } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  task: any;
  taskEdit:any;
  newTask: any;
  info: any;
  constructor(private _myHttpService: MyHttpService){}

  ngOnInit(){
   this.getTasksFromService();
  this.newTask = { title: "", description: "" }
  }
  onSubmit() {
    //to send form data (this.newTask) to the service
    let observable = this._myHttpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = { title:"",description:""}
      //call GetTasks() again to show update or creation in "real-time"
      this.getTasksFromService();
    })
  }
  showEdit(task){
    this.taskEdit = task;
   
  }
  onSubmitUpdate(){
    console.log(this.taskEdit);
    let observable = this._myHttpService.update(this.taskEdit);
    observable.subscribe(data => {
      console.log("Made updated", data['user']);
      this.getTasksFromService();
      this.taskEdit = false;
      
    })
  }

  getTasksFromService(){
    let observable = this._myHttpService.getTasks();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    // console.log(data['tasks'])
    this.tasks = data['tasks']; //keyword references what is inside res.json(users) from controllers file
  });
    
  }

  showTaskFromService(id){
    console.log(id);
    let observable = this._myHttpService.showTask(id);
    observable.subscribe(data => {console.log("Got one task", data)
    this.task = data['task'];
  })
  }

  deleteTask(id){
    // console.log(id);
    let observable = this._myHttpService.serviceDeleteTask(id)
    observable.subscribe(data => {
      console.log(data);
    })
    this.getTasksFromService();
    this.taskEdit = false;
  }
}
