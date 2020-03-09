import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conception',
  templateUrl: './conception.component.html',
  styleUrls: ['./conception.component.scss']
})
export class ConceptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliders:Object=[
    {id:'conception',title:'Conception',slides:[
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_0.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_1.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_2.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_3.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_4.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_5.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_6.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/MediawaysBO_7.jpg'},
      {id:0,title:'Dominos musique',url:'Conception/conception1.png'},
      {id:1,title:'Dominos musique',url:'Conception/conception2.png'},
      {id:2,title:'Dominos musique',url:'Conception/conception3.png'}
    ]}
  ];
  conceptionSliderPos:number=0;

  prevSlide(taille){
    this.conceptionSliderPos--;
    if(this.conceptionSliderPos<0){
      this.conceptionSliderPos=(taille-1);
    }
  }
  nextSlide(taille){
    this.conceptionSliderPos++;
    if(this.conceptionSliderPos>taille-1){
      this.conceptionSliderPos=0;
    }
    
  }


}
