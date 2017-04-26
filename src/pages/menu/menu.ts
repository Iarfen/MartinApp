import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ui } from '../ui';

import { MenuEventsPage } from '../menu_events/menu_events';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  brand: string;
  username: string;

  constructor(public navCtrl: NavController) {
    this.brand = "Martin";
    this.username = "Andrea Jameson";
  }

  ngOnInit() {
    ui.size("p_menu_logout",1,80/667);
    ui.size("p_menu_logout_image",80/667,80/667,false,true);

    ui.position_append("p_menu_logout_h2","p_menu_logout",35/375,21.6/80);
    ui.position_append("p_menu_logout_p","p_menu_logout",35.5/375,49.6/80);

    ui.position_append("p_menu_toolbar_close","p_menu",18/375,34.5/667);
    ui.width("p_menu_toolbar_close",13/375);

    ui.position_append("p_menu_toolbar_settings","p_menu",340.5/375,30.5/667);
    ui.width("p_menu_toolbar_settings",20/375);

    ui.position_append("p_menu_title","p_menu",0,30/667);
    ui.font_size("p_menu_title",20/667);
    ui.width("p_menu_title",1);

    ui.position_append("p_menu_button_home","p_menu",0,105/667);
    ui.font_size("p_menu_button_home",35/667);
    ui.width("p_menu_button_home",1);

    ui.position_append("p_menu_button_profile","p_menu",0,172/667);
    ui.font_size("p_menu_button_profile",35/667);
    ui.width("p_menu_button_profile",1);

    ui.position_append("p_menu_button_events","p_menu",0,243/667);
    ui.font_size("p_menu_button_events",35/667);
    ui.width("p_menu_button_events",1);

    ui.position_append("p_menu_button_gallery","p_menu",0,314/667);
    ui.font_size("p_menu_button_gallery",35/667);
    ui.width("p_menu_button_gallery",1);

    ui.position_append("p_menu_button_captures","p_menu",0,385/667);
    ui.font_size("p_menu_button_captures",35/667);
    ui.width("p_menu_button_captures",1);

    ui.position_append("p_menu_button_stats","p_menu",0,456/667);
    ui.font_size("p_menu_button_stats",35/667);
    ui.width("p_menu_button_stats",1);
  }

  close_menu()
  {
    this.navCtrl.pop(MenuPage);
  }

  open_events()
  {
    this.navCtrl.push(MenuEventsPage);
  }
}
