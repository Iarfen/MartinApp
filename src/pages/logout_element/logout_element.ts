import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

export class logoutElement {
  logout: string;
  username: string;

  constructor() {
    this.username = "Andrea Jameson";
    this.logout = '<div id="logout"><h2 id="logout_h2">Logout</h2><p id="logout_p">'+this.username+'</p><img id="logout_image" src="assets/avatar.png"></div>';
  }
}
