import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: RouterLink
) { }

/* ngOnInit() {

}

goToInicio() {
    this.router.navigate(['/login']);
}

}

  login(){
    let logado:number =0;
    let usuario:any = document.getElementById("usuario")?.ariaValueNow;
    let senha:any = document.getElementById("senha")?.ariaValueNow;

    if(usuario == 'admin' && senha == '123456'){
      goToInicio();
      logado = 1;
    }
  } */
}

