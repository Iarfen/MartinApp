import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ui } from '../ui';

import { NotificationMovementPage } from '../notification_movement/notification_movement';

import { NotificationSleepPage } from '../notification_sleep/notification_sleep';

import { NotificationVitalsPage } from '../notification_vitals/notification_vitals';

import { NotificationFallsPage } from '../notification_falls/notification_falls';

@Component({
  selector: 'page-menu-events',
  templateUrl: 'menu_events.html'
})
export class MenuEventsPage {
  brand: string;
  username: string;

  constructor(public navCtrl: NavController) {
    this.brand = "Martin";
    this.username = "Andrea Jameson";
  }

  ngOnInit() {
    ui.size("p_menu_events_logout",1,80/667);
    ui.size("p_menu_events_logout_image",80/667,80/667,false,true);

    ui.position_append("p_menu_events_logout_h2","p_menu_events_logout",35/375,21.6/80);
    ui.position_append("p_menu_events_logout_p","p_menu_events_logout",35.5/375,49.6/80);

    ui.position_append("p_menu_events_toolbar_close","p_menu",15/375,35.5/667);
    ui.width("p_menu_events_toolbar_close",19/375);

    ui.position_append("p_menu_events_toolbar_settings","p_menu",340.5/375,30.5/667);
    ui.width("p_menu_events_toolbar_settings",20/375);

    ui.position_append("p_menu_events_title","p_menu",0,21/667);
    ui.font_size("p_menu_events_title",27.5/667);
    ui.width("p_menu_events_title",1);

    ui.position_append("p_menu_events_button_movements","p_menu_events",0,105/667);
    ui.font_size("p_menu_events_button_movements",35/667);
    ui.width("p_menu_events_button_movements",1);

    ui.position_append("p_menu_events_button_sleep","p_menu_events",0,172/667);
    ui.font_size("p_menu_events_button_sleep",35/667);
    ui.width("p_menu_events_button_sleep",1);

    ui.position_append("p_menu_events_button_vitals","p_menu_events",0,243/667);
    ui.font_size("p_menu_events_button_vitals",35/667);
    ui.width("p_menu_events_button_vitals",1);

    ui.position_append("p_menu_events_button_falls","p_menu_events",0,314/667);
    ui.font_size("p_menu_events_button_falls",35/667);
    ui.width("p_menu_events_button_falls",1);

    ui.position_append("p_menu_events_martin_logo","p_menu_events",145.5/375,492/667);
    ui.width("p_menu_events_martin_logo",84.5/375);
  }

  close_menu()
  {
    this.navCtrl.pop(MenuEventsPage);
  }

  open_notification_movement()
  {
    this.navCtrl.push(NotificationMovementPage);
  }

  open_notification_sleep()
  {
    this.navCtrl.push(NotificationSleepPage);
  }

  open_notification_vitals()
  {
    this.navCtrl.push(NotificationVitalsPage);
  }

  open_notification_falls()
  {
    this.navCtrl.push(NotificationFallsPage);
  }
}
