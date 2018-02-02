import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
  removepet(pet){
    this._httpservice.RemovePet(pet._id).subscribe(data => {
      console.log("deleting quote data", data);
      if (data['message'] == "Success"){
        this._router.navigate(['/'])
      }
      else{
        this.error = "sorry did not delete"
    }
    })
}

}