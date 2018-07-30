import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
  removeapp(app){
    this._httpservice.RemoveApp(app._id).subscribe(data => {
      console.log("deleting quote data", data);
      if (data['message'] == "Success"){
        this._router.navigate(['/'])
      }
      else{
        this.error = "sorry did not delete"
    }
    })
}

incrementlike(app, id){
  this._httpservice.incrementlike(this.appId, this.app).subscribe(data => {
    console.log("deleting quote data", data);
    if (data['message'] == "Success"){

      this.app.likes += 1
    }
    else{
      this.error = "sorry did not increment"
  }
  })
}

}