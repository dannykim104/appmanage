import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petId: string
  error: string 
  pet: any
  constructor(private _httpservice: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log("route params", data);
      this.petId = data.id;
      this.getOnePet();
  })
  this.pet = {name: "" , type: "", desc: ""}
  }

  getOnePet(){
    let obsv = this._httpservice.GetOnePet(this.petId);
    obsv.subscribe(data => {
      console.log("Got data from get one", data)
      if (data['message'] == "Success"){
        this.pet = data['data']
        console.log(this.pet)
      }
      else{
        this.error = "sorry did not load"
    }
  })

  }

  onSubmit(){
    let obsv = this._httpservice.Alter(this.petId, this.pet);
    obsv.subscribe(data => {
      console.log("Got data from get one", data)
      if (data['message'] == "Success"){
        this.pet = data['data']
        this._router.navigate(['/'])
      }
      else{
        this.error = "sorry did not load"
    }
    })

  }

}
