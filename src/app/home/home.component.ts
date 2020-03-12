import { Component, OnInit } from '@angular/core';
import { AppService } from '../connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers : [AppService]
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService){}
 
  dispos:any;
  
  ngOnInit(): void {
    this.appService.getJson("assets/data/dispos.json").subscribe(data =>{
      this.dispos = data['dispos'];
    })
  }
  
}
