import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  appId: string
  error: string 
  app: any
  constructor(private _httpservice: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log("route params", data);
      this.appId = data.id;
      this.getOneApp();
    })
    console.log(this.app)
 //function call
  }

  getOneApp(){
    let obsv = this._httpservice.GetOneApp(this.appId);
    obsv.subscribe(data => {
      console.log("Got data from get one", data)
      if (data['message'] == "Success"){
        this.app = data['data']
        console.log(this.app)
      }
      else{
        this.error = "sorry did not load"
    }
  })

  }

  onSubmit(){
    let obsv = this._httpservice.Alter(this.appId, this.app);
    obsv.subscribe(data => {
      console.log("Got data from get one", data)
      if (data['message'] == "Success"){
        this.app = data['data']
        this._router.navigate(['/'])
      }
      else{
        this.error = "sorry did not load"
    }
    })

  }

}
