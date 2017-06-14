import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ui } from '../ui';

import { states } from '../states';

import { logoutElement } from '../logout_element/logout_element';

import * as $ from "jquery";

@Component({
  selector: 'page_notification_movement',
  templateUrl: 'notification_movement.html'
})
export class NotificationMovementPage {
  brand: string;
  username: string;
  child_name: string;
  logout: string;

  constructor(public navCtrl: NavController) {
    this.brand = "Martin";
    this.username = "Andrea Jameson";
    this.child_name = "Camila";
    let logout = new logoutElement();
    this.logout = logout.logout;
  }

  ngOnInit() {
    ui.size("p_movement_logout",1,80/667);
    ui.size("p_movement_logout_image",80/667,80/667,false,true);

    ui.position_append("p_movement_logout_h2","p_movement_logout",35/375,21.6/80);
    ui.position_append("p_movement_logout_p","p_movement_logout",35.5/375,49.6/80);

    ui.position_append("toolbar_close","notification_movement_container",18/375,34.5/667);
    ui.width("toolbar_close",13/375);
    ui.position_append("toolbar_settings","notification_movement_container",340.5/375,32.5/667);
    ui.position_append("toolbar_title","notification_movement_container",0,29.5/667);
    ui.width("toolbar_title",1);

    ui.position_append("son_name","notification_movement_container",15/375,94/667);
    ui.width("son_name",345.5/375);
    ui.font_size("son_name",35/667);
    ui.position_append("status_message","notification_movement_container",15/375,129/667);
    ui.font_size("status_message",25/667);
    ui.width("status_message",345.5/375);

    ui.size("button_call",345.5/375,60/667);
    ui.size("button_listen",345.5/375,60/667);

    ui.position_append("button_listen","notification_movement_container",15/375,384/667);
    ui.position_append("button_call","notification_movement_container",15/375,460/667);

    ui.position_append("button_listen_img","button_listen",96.5/345.5,15/60);
    ui.position_append("button_call_img","button_call",96.5/345.5,15/60);
    ui.width("button_listen_img",30/375);
    ui.width("button_call_img",30/375);

    ui.position_append("button_listen_span","button_listen",135/345.5,17/60);
    ui.position_append("button_call_span","button_call",135/345.5,17/60);
    ui.width("button_listen_span",1);
    ui.width("button_call_span",1);

    ui.width("central_image",126.5/375);
    ui.position_append("central_image","notification_movement_container",124/375,193.5/667);

    ui.width("listen_message",1);
    ui.position_append("listen_message","notification_movement_container",0,341.5/667);

    ui.position_append("details_container","notification_movement_container",0,540/667);

    ui.position_append("details_container_calendar","details_container",25/375,0);
    ui.position_append("details_container_time","details_container",111.5/375,0);
    ui.position_append("details_container_phone","details_container",191/375,0);

    $('#button_listen').click(function(){
      console.log("Touching audio!");
      var audio = new Audio("https://s3-sa-east-1.amazonaws.com/martin-audio/Data07_test.wav");
      audio.play();
    });
  }

  close_menu()
  {
    states.mode = "normal";
    states.movement_displayed = true;
    this.navCtrl.pop(NotificationMovementPage);
    setTimeout(() => {
      states.movement_displayed = false;
    },30000);
  }
}
