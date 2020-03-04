import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphisme',
  templateUrl: './graphisme.component.html',
  styleUrls: ['./graphisme.component.css']
})
export class GraphismeComponent implements OnInit {

  constructor() { }

  sliders:Object=[
    {id:'logos',title:'Logos',slides:[
      {id:0,title:'titre',url:''},
    ]},
    {id:'graphisme',title:'Graphisme',slides:[
      {id:0,title:'titre',url:''},
    ]},
    {id:'conception',title:'Conception',slides:[
      {id:0,title:'Dominos musique',url:'conception1.png'},
      {id:1,title:'Dominos musique',url:'conception2.png'},
      {id:2,title:'Dominos musique',url:'conception3.png'}
    ]}
  ];

  ngOnInit(): void {
    console.log(JSON.stringify(this.sliders[2].slides));
    console.log(this.sliders[2].slides);
  }

}
