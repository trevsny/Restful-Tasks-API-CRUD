import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { all } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  
  constructor(private _myHttp:HttpClient) { 
    // this.getPokemon();
    // this.getTasks();
    // this.getOneTask();
  }
  getTasks(){
    //store Observable in a variable
    // let tempObservable = this._myHttp.get('/tasks');
    //subscribe to observable and provide the code 
    // tempObservable.subscribe(data => 
      // console.log("Got our tasks!", data));
      return this._myHttp.get('/tasks');
    }
    showTask(id){
      return this._myHttp.get('/tasks/' + id)
    }
    addTask(newTask){
      return this._myHttp.post('/tasks/new', newTask)
    }

  editPage(task){
      return this._myHttp.get('/tasks/' + task._id + '/edit')
    }

    update(taskToUpdate) {
      // console.log(taskToUpdate);
      return this._myHttp.put('/tasks/'+ taskToUpdate._id, taskToUpdate)
    }
    serviceDeleteTask(id){
      // console.log("Service" ,id);
      return this._myHttp.delete('/tasks/'+ id);
    }
    
  //   getOneTask(){
  //     //store Observable
  //     let tempObservable = this._myHttp.get('/tasks/5af3a252c156b205a9fefc35');
  //     //subscribe
  //     tempObservable.subscribe(data => console.log("Got ONE task", data));
  //   }
  //   getDestroyTask(){
  //     let tempObservable = this._myHttp.get('/tasks/5af3a252c156b205a9fefc35');
  //     tempObservable.subscribe(data => console.log("Deleted One task", data));
  //   }
    // getPokemon(){
    //   let bulbasaur = this._myHttp.get('https://pokeapi.co/api/v2/pokemon/1/');
    //   bulbasaur.subscribe(data => console.log("Got a Pokemon!", data)); 
    //   // let bulb = this._myHttp.get('https://pokeapi.co/api/v2/move/13/');
    //   // bulb.subscribe(data => console.log("Here's my favorite move ", data))
    //   let allPokeAbility = this._myHttp.get('https://pokeapi.co/api/v2/ability/65/');
    //   allPokeAbility.subscribe(data => console.log("Got all Pokemon with same abilities", data.pokemon.length)
    //   );
  }
