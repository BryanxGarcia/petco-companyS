import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  favorito=false;
  constructor() { }

  ngOnInit() {
  }
onClick() { 
  this.favorito=!this.favorito;
}
}
 