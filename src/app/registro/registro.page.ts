import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces';
import { FireStoreService } from '../servicio/fire-store.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUsers: Users = {
    nombre: '',
    edad: null,
    rut: '',
    direccion: '',
    correo: '',
    telefono: null,
    contrasena: '',
  };
  users: Users [] = [];
  constructor(public database: FireStoreService) { }

  ngOnInit() {
    this.getUsers();
  }

  save(){
    console.log('Esto vamos a guardar -->', this.newUsers );
    const data = this.newUsers;
    const Usuarios = 'Users';
    this.database.crearDocument<Users>(data, Usuarios);

  } 
  getUsers(){
    const enlace = 'Users';
    this.database.getCollectionChanges<Users>(enlace).subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }
  eliminarUsuario(id: string){
    this.database.eliminarDato('usuario', id)
  }
}
