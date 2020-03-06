import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
 
 
  ngOnInit(): void {

  }

}
