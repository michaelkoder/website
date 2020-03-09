import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {
 
  @Input() title = `Information`;
  @Input() content = `0`;
  @Input() imgSrc = `0`;
  @Input() popinLink = '';

  constructor() { }

  ngOnInit(): void {
  }

}
