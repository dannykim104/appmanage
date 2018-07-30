import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  apps: [any]
  appId: string
  error: string 
  app: any

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
      this._httpservice.GetAllApps().subscribe(data => {
        if (data['message'] == "Success"){
          console.log(data)
          this.apps = data['data']
        }
        else{
            this.error = "sorry did not load"
        }

      })
  }
  

}
