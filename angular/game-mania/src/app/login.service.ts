import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor() { }

  login(usuario: string, senha: string): void{
    if(usuario=="admin" && senha=="123456"){
      localStorage.setItem('token', 'adm123456');
      this.mostraMenu.next(false);
    }else{
      this.mostraMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }


}