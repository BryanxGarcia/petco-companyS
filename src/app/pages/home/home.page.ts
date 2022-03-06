import { Component, OnInit, NgModule } from '@angular/core';
interface Componente{
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  componentes: Componente[] = [
    {
      name:'Login',
      redirectTo:'/login'
    },
    {
      name:'Sign-in',
      redirectTo:'/sign-in'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
