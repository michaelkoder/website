import { Component, OnInit } from '@angular/core';
import { AppService } from '../connection.service';

@Component({
  selector: 'app-conception',
  templateUrl: './conception.component.html',
  styleUrls: ['./conception.component.scss'],
  providers: [AppService]
})
export class ConceptionComponent implements OnInit {

  constructor(private AppService: AppService){}

  sliders:any;
  conceptionSliderPos:number=0;
  nbrSlides:number=0;

  ngOnInit(): void {
    this.AppService.getJson("assets/data/conception.json").subscribe(data =>{
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
