import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  GetAllApps(){
    console.log("Reached the service: GetAllRest")
    return this._http.get('/getall')
  }

  CreateApp(newapp){
    return this._http.post('/makeapp', newapp)
  }

  GetOneApp(id){
    console.log("Reached the service for getallrest")
    return this._http.get('/getone/' + id)
  }

  Alter(id, app){
    return this._http.put('/alter/' + id, app)
  }

  RemoveApp(id){
    return this._http.delete('/delete/' + id)
  }

  incrementlike(id, app){
    return this._http.patch('/increment/' + id, app)
  }
}
