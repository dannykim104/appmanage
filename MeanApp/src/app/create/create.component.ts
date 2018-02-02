import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any 
  error: string 

  constructor(private _httpservice: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
      console.log("reached create.ts")
      this.newPet = {name: "", type: "", desc: ""}
  }

  onSubmit(data){
      let obsv = this._httpservice.CreatePet(this.newPet);
      obsv.subscribe(data => {
          if (data['message'] == "Success"){
            this._router.navigate(['/'])
          }
          else{
            this.error = "sorry did not create"
        }
      })
  }
}
