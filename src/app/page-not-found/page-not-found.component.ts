import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      showPolygons();
      setInterval(function(){
        showPolygons();
      },4500)
    })
    
    function showPolygons() {
      
      $('[class="processed"]').removeAttr('class');
      var polyCount = $('polygon').length;
      
      $('polygon').each(function(ind, el) {
        setTimeout(function() {
           $('polygon:eq(' + ind + ')').attr('class', 'processed');
        }, Math.random() * 2000);
      });
    }
  }

}
