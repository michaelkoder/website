import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-graphisme',
  templateUrl: './graphisme.component.html',
  styleUrls: ['./graphisme.component.scss']
})
export class GraphismeComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }
  sliders:Object=[
    {id:'logos',title:'Logos',slides:[
      {id:0,title:'titre',url:'Logos/demoShop.jpg'},
      {id:1,title:'titre',url:'Logos/ekow.jpg'},
      {id:2,title:'titre',url:'Logos/justiceAdministrative.jpg'},
      {id:3,title:'titre',url:'Logos/learnmeasy.jpg'},
      {id:4,title:'titre',url:'Logos/souffle.jpg'},
      {id:5,title:'titre',url:'Logos/mediaways.jpg'},
      {id:6,title:'titre',url:'Logos/musilink.jpg'},
      {id:7,title:'titre',url:'Logos/vendrenligne.jpg'},
      {id:8,title:'titre',url:'Logos/voxpod.jpg'}
    ]},
    {id:'graphisme',title:'Graphisme',slides:[
      {id:0,title:'titre',url:'Graphisme/crush.jpg'},
      {id:1,title:'titre',url:'Graphisme/crush2.jpg'},
      {id:2,title:'titre',url:'Graphisme/Ekow3.jpg'},
      {id:3,title:'titre',url:'Graphisme/Fly.jpg'},
      {id:4,title:'titre',url:'Graphisme/Fly2.jpg'},
      {id:5,title:'titre',url:'Graphisme/Flyer2.jpg'},
      {id:6,title:'titre',url:'Graphisme/Maquette04.jpg'},
      {id:7,title:'titre',url:'Graphisme/maquetteAccueil.jpg'},
      {id:8,title:'titre',url:'Graphisme/notebook.jpg'}
    ]}
  ];

  ngOnInit(): void {
  }

}
