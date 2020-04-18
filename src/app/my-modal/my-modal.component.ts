import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {
 
  @Input() title = `Information`;
  @Input() content = `0`;
  @Input() imgSrc = `0`;
  @Input() lang = `0`;
  @Input() popinLink = '';

  constructor(    public translate: TranslateService    ) { }

  currentLang ='fr';
  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }

}
