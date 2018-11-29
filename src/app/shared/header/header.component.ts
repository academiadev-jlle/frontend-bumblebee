import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  bumblebee = '../../assets/bumblebee.png';
  logo = '../../assets/logo-4.png';
  navbarOpen = false;
  dropdownOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDropdownUser() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
