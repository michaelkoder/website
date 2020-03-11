import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-conception',
  templateUrl: './conception.component.html',
  styleUrls: ['./conception.component.scss']
})
export class ConceptionComponent implements OnInit {

  constructor(private httpClient: HttpClient){}

  sliders:any;
  conceptionSliderPos:number=0;
  nbrSlides:number=0;

  ngOnInit(): void {
    this.httpClient.get("assets/data/conception.json").subscribe(data =>{
      console.table(data)
      this.sliders = data['slides'];
      this.nbrSlides=this.sliders.length
    });
  };
  prevSlide(){
    this.conceptionSliderPos--;
    if(this.conceptionSliderPos<0){
      this.conceptionSliderPos=(this.nbrSlides-1);
    }
  }
  nextSlide(){
    this.conceptionSliderPos++;
    if(this.conceptionSliderPos>this.nbrSlides-1){
      this.conceptionSliderPos=0;
    }
    
  }


}
