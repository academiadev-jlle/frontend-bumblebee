import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/token.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  nome_do_usuario = 'Minha Conta';
  bumblebee = '../../assets/bumblebee.jpg';
  logo = '../../assets/logo-4.png';
  isCollapsed = true;
  tamanho_fonte = 12;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getInfo()
      .subscribe(
        (resp) => {
          this.nome_do_usuario = resp['body']['nome'];
        }
      );
  }

  existeLogin() {
    return this.tokenService.hasToken();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  // ============ ACESSIBILIDADE ============ //

  autoContraste() {
    const body = document.getElementById('body');
    body.className = body.className === '' ? 'autoContraste' : '';
  }

  alterarFonte(opcao: string) {
    if (opcao === 'mais') {
      this.tamanho_fonte++;
    } else if (opcao === 'menos') {
      this.tamanho_fonte--;
    } else {
      this.tamanho_fonte = 12;
    }
    const body = document.getElementById('body');
    body.style.fontSize = this.tamanho_fonte + 'pt';
  }

}
