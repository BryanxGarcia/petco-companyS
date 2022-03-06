import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.page.html',
  styleUrls: ['./searchresult.page.scss'],
})
export class SearchresultPage implements OnInit {
  favorito=false;
  constructor() { }

  ngOnInit() {
  }
onClick() { 
  this.favorito=!this.favorito;
}

}
