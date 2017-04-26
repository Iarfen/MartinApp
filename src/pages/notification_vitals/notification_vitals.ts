import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ui } from '../ui';

import { logoutElement } from '../logout_element/logout_element';

@Component({
  selector: 'page_notification_vitals',
  templateUrl: 'notification_vitals.html'
})
export class NotificationVitalsPage {
  brand: string;
  username: string;
  username_firstname: string;
  child_name: string;
  logout: string;

  constructor(public navCtrl: NavController) {
    this.brand = "Martin";
    this.username = "Andrea Jameson";
    this.username_firstname = "Andrea";
    this.child_name = "Camila";
    let logout = new logoutElement();
    this.logout = logout.logout;
  }

  ngOnInit() {
    ui.size("p_vitals_logout",1,80/667);
    ui.size("p_vitals_logout_image",80/667,80/667,false,true);

    ui.position_append("p_vitals_logout_h2","p_vitals_logout",35/375,21.6/80);
    ui.position_append("p_vitals_logout_p","p_vitals_logout",35.5/375,49.6/80);

    ui.position_append("p_vitals_toolbar_close","p_vitals",18/375,34.5/667);
    ui.width("p_vitals_toolbar_close",13/375);
    ui.position_append("p_vitals_toolbar_settings","p_vitals",340.5/375,32.5/667);
    ui.position_append("p_vitals_toolbar_title","p_vitals",0,29.5/667);
    ui.width("p_vitals_toolbar_title",1);

    ui.position_append("p_vitals_son_name","p_vitals",15/375,94/667);
    ui.font_size("p_vitals_son_name",35/667);
    ui.position_append("p_vitals_status_message","p_vitals",15/375,131.5/667);
    ui.font_size("p_vitals_status_message",25/667);

    ui.size("p_vitals_button_call",345.5/375,60/667);

    ui.position_append("p_vitals_button_call","p_vitals",15/375,460/667);

    ui.position_append("p_vitals_button_call_span","p_vitals_button_call",0,14.5/60);
    ui.width("p_vitals_button_call_span",345.5/375);
    ui.font_size("p_vitals_button_call_span",25/667);

    ui.size("p_vitals_central_image",150/375,134.6/667);
    ui.position_append("p_vitals_central_image","p_vitals",124/375,209.4/667);

    ui.width("p_vitals_listen_message",1);
    ui.position_append("p_vitals_listen_message","p_vitals",0,341.5/667);

    ui.y_append("p_vitals_button_over_message","p_vitals",419.5/667);
    ui.width("p_vitals_button_over_message",1);
    ui.font_size("p_vitals_button_over_message",25/667);

    ui.position_append("p_vitals_details_container","p_vitals",0,540/667);

    ui.position_append("p_vitals_details_container_calendar","p_vitals_details_container",25/375,0);
    ui.position_append("p_vitals_details_container_time","p_vitals_details_container",111.5/375,0);
    ui.position_append("p_vitals_details_container_phone","p_vitals_details_container",191/375,0);
  }

  close_menu()
  {
    this.navCtrl.pop(NotificationVitalsPage);
  }
}
