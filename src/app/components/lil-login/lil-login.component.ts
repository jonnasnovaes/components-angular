import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

interface Login {
  email: string;
  password: string;
  keepLogged: boolean;
}

@Component({
  selector: 'lil-login',
  templateUrl: './lil-login.component.html',
  styleUrls: ['./lil-login.component.scss']
})
export class LilLoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    keepLogged: new FormControl(false),
  });

  loading = false;          // Utilizado para animação de loading
  loginFailed = false;      // Utilizado para exibir a mensagem de erro quando login falhar
  forgotPass = false;       // Utilizado para habilitar/desabilitar o link de recuperar acesso

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.loginFailed = false;

    const login: Login = this.form.value;

    console.log(login);

    // Serve somente para simular o erro de login
    setTimeout(() => {
      this.loading = false;
      this.loginFailed = true;
    }, 2000);

    // Aqui entra o redirecionamento da página após a validação ( router.navigate([]) )
  }

  // Responsável por logar utilizando a tecla "Enter"
  pressEnter($event: any) {
    $event.keyCode === 13 ? this.login() : null;
  }

  // Responsável por executar a ação de recuperação de acesso
  forgotPassword() {

  }

}
