import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  bumblebee = '../../assets/bumblebee.png';
  logo = '../../assets/logo-4.png';
  isCollapsed = true;
  body: any;

  constructor() { }

  ngOnInit() {
  }

  autoContraste() {
    this.body = document.getElementById('body');
    this.body.className = this.body.className === '' ? 'autoContraste' : '';
  }

}
