import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  bumblebee = '../../assets/bumblebee.jpg';
  logo = '../../assets/logo-4.png';
  isCollapsed = true;
  tamanho_fonte = 12;

  constructor() { }

  ngOnInit() {
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
