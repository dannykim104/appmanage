import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  pets: [any]
  error: string 
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
      this._httpservice.GetAllPet().subscribe(data => {
        if (data['message'] == "Success"){
          console.log(data)
          this.pets = data['data']
        }
        else{
            this.error = "sorry did not load"
        }

      })
  }

  

}
