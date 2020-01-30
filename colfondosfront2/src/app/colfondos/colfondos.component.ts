
import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { NgForm } from '@angular/forms';
import { ColfondosserviceService } from '../service/colfondosservice.service';

@Component({
  selector: 'app-colfondos',
  templateUrl: './colfondos.component.html',
  styleUrls: ['./colfondos.component.css']
})
export class ColfondosComponent implements OnInit {

  user: User = new User()

  constructor(private colfondosservice: ColfondosserviceService) { }

  ngOnInit() {
  }

  sendData() {
    console.log(this.user)

    let isValidEmail = this.validarEmail(this.user.email)
    let isValidDocument = this.validarCC(this.user.document.toString())
    let isValidCellphone = this.validarCelular(this.user.cellphone.toString())

    if(!isValidEmail) alert("Email invalido");
    if(!isValidDocument) alert("Max 10 numeros. Solo se admiten numeros");
    if(!isValidCellphone) alert("Celular debe tener 10 digitos y empezar por 3. Solo se admiten numeros");
    if(isValidCellphone && isValidDocument && isValidEmail) {

      //let sendUser: User = new User()
      //sendUser.document = parseInt(this.user.document.toString())
      //sendUser.typeDocument = this.user.typeDocument
      //sendUser.email = this.user.email
      //sendUser.cellphone = parseInt(this.user.cellphone.toString())


      //this.user.document = parseInt(this.user.document.toString())
      //this.user.cellphone = parseInt(this.user.cellphone.toString())

      console.log(this.user)

      this.colfondosservice.createUser(this.user)

    }
  }

  validarEmail(valor) {

    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(valor)){
      return true;
    } else {
      alert("Email invalido");
      return false;
    }
  }

  validarCC(valor) {
    if(valor.length>10 && !(/^([0-9])*$/.test(valor))) {
      alert("Max 10 numeros. Solo se admiten numeros");
      return false;
    }else {
      return true;
    }
  }

  validarCelular(valor) {

    if(valor.length!=10 && valor.charAt(0)!=3 && !(/^([0-9])*$/.test(valor))) {
      alert("Celular debe tener 10 digitos");
      alert("Celular debe empezar por 3");
      alert("Solo se admiten numeros");
      return false;
    }else {
      return true;
    }
  }
}
