import { Component, OnInit } from '@angular/core';
import { AppService } from '../connection.service';

@Component({
  selector: 'app-graphisme',
  templateUrl: './graphisme.component.html',
  styleUrls: ['./graphisme.component.scss'],
  providers: [AppService]
})
export class GraphismeComponent implements OnInit {

  constructor(private appService: AppService){}

  sliders:any;
  graphisme:any;
  logos:any;
  
  ngOnInit(): void {
    this.appService.getJson("assets/data/graphisme.json").subscribe(data =>{
      this.graphisme = data[1].slides;
      this.logos = data[0].slides;
    })

  }
  

}
