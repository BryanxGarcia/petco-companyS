import {  Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})

export class LoginPage implements OnInit {

  constructor() { }

  @ViewChild('passwordEyeRegister') passwordEye;
  // Seleccionamos el elemento con el nombre que le pusimos con el ver
  passwordTypeInput  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword  =  'eye-off';
  
  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
      this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
      this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
      this.passwordEye.el.setFocus();
  }

  ngOnInit() {
  }

}
