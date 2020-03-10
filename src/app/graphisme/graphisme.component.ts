import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-graphisme',
  templateUrl: './graphisme.component.html',
  styleUrls: ['./graphisme.component.scss']
})
export class GraphismeComponent implements OnInit {
  faCoffee = faCoffee;

  constructor(private httpClient: HttpClient){}

  sliders:any;
  graphisme:any;
  logos:any;
  
  ngOnInit(): void {
    this.httpClient.get("assets/data/graphisme.json").subscribe(data =>{
      this.graphisme = data[1].slides;
      this.logos = data[0].slides;
    })

  }
  

}
