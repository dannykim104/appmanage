import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  GetAllPet(){
    console.log("Reached the service: GetAllRest")
    return this._http.get('/getall')
  }

  CreatePet(newpet){
    return this._http.post('/makepet', newpet)
  }

  GetOnePet(id){
    console.log("Reached the service for getallrest")
    return this._http.get('/getone/' + id)
  }

  Alter(id, rest){
    return this._http.put('/alter/' + id, rest)
  }

  RemovePet(id){
    return this._http.delete('/delete/' + id)
  }
}
