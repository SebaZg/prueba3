import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Users={
    correo: null,
    contrasena: null
  }
  constructor(private auth:AuthService,private route: Router) { }

  ngOnInit() {
  }

  async login(){
    console.log('credenciales ->', this.Users);
    const res = await  this.auth.login(this.Users.correo, this.Users.contrasena)
    if (res) {
      this.route.navigate(['licores']);      
    }else{
      alert('usuario no encontrado');
    }

  }



}
