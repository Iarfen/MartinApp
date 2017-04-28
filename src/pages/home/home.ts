import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { BLE } from 'ionic-native';

import { MenuPage } from '../menu/menu';

import { ui } from '../ui';

import { sensor } from '../sensor';

import { states } from '../states';

import { NotificationMovementPage } from '../notification_movement/notification_movement';

import { NotificationSleepPage } from '../notification_sleep/notification_sleep';

import { NotificationVitalsPage } from '../notification_vitals/notification_vitals';

import { NotificationFallsPage } from '../notification_falls/notification_falls';

import * as Amqp from 'amqp-ts';

import * as $ from "jquery";

//import * as amqp from 'amqplib/callback_api';

//import * as rabbit from 'rabbit.js';

//import * as amqp from '../../../node_modules/amqplib/callback_api.js';

//import * as Amqp from '../../../node_modules/@types/amqplib';

//declare function amqp_receive() : void;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  brand: string;
  current_date: string;
  screen_width: number;
  screen_height: number;
  http: Http;
  notification_mode: boolean;

  constructor(public navCtrl: NavController, public http2: Http, platform: Platform) {
    this.brand = 'Martin';
    var actual_date = new Date();
    this.current_date = actual_date.getDay().toString() + ", " + actual_date.getMonth().toString() + " " + actual_date.getDay().toString();
    this.screen_width = window.innerWidth;
    this.screen_height = window.innerHeight;
    this.http = http2;
/*    platform.ready().then(() => {
      console.log("Devices to search on");
      BLE.enable();
      BLE.startScan([]).subscribe(device => {
        console.log("Here!");
        console.log(JSON.stringify(device));
        console.log(device.id);
        if (typeof device.name !== "undefined" && device.name.substr(-4,3) == "TaG")
        {
          console.log("Correct device!");
          var connection = BLE.connect(device.id).subscribe(connect => {
            console.log("Hello!");
            console.log(JSON.stringify(connect));
            var send_data = new Uint8Array(1);
            send_data[0] = 0x001;
            BLE.write(device.id,"f000aa8004514000b000000000000000","f000aa8204514000b000000000000000",send_data.buffer).then(result => { console.log("Write data 1"); console.log(JSON.stringify(result)); },
              err => { console.log("something has happened!"); console.log(err); });*/
            /*var accelerometer_data = new Uint32Array(1);
            accelerometer_data[0] = 0x0238;
            BLE.write(device.id,"f000aa8004514000b000000000000000","f000aa8104514000b000000000000000",accelerometer_data.buffer).then(result => { console.log("Write data 238"); console.log(JSON.stringify(result)); },
              err => { console.log(JSON.stringify(err)); });*/
/*          });
        }
        },
        err => {
          console.log(JSON.stringify(err));
                //this.message = "Error";
              });
    });*/

    //var amqp = require('../../../node_modules/amqplib/callback_api.js');

    /*console.log('previous function calling');

    amqp_receive();

    console.log('after function calling');*/

    /*console.log('starting script');

    if (typeof amqp.connect !== 'undefined')
    {
      console.log('connect function defined');
    }

    console.log('after typeof check');*/

    /*amqp.connect('amqp://martin:n0melase@54.233.152.245:5672', function(err, conn) {
      console.log('connecting');
      conn.createChannel(function(err, ch) {
        var q = 'hello';
        var msg = 'Hello World!';

        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
      });
      setTimeout(function() { conn.close(); process.exit(0) }, 500);
    });*/

  //var context = require('rabbit.js').createContext('','');
  //var connection = new Amqp.Connection("amqp://localhost");

  /*console.log('before Amqp.Connection');

    var connection = new Amqp.Connection("amqp://martin:n0melase@54.233.152.245:5672");
    var exchange = connection.declareExchange("");
    var queue = connection.declareQueue("temperature");
    queue.bind(exchange);
    queue.startConsumer((message) => {
      console.log("Message received: " + message.getContent());
    },"temperature");

    // it is possible that the following message is not received because
    // it can be sent before the queue, binding or consumer exist
    var msg = new Amqp.Message("Test");
    exchange.send(msg);

    connection.completeConfiguration().then(() => {
      // the following message will be received because
      // everything you defined earlier for this connection now exists
      var msg2 = new Amqp.Message("Test2");
      exchange.send(msg2);
    });*/

    //devices.forEach(v => console.log(v));
  }

  ngOnInit() {
    ui.size("home_toolbar",1,54/667);
    ui.position_append("home_toolbar_close","home_content",18/375,34.5/667);
    ui.position_append("home_toolbar_settings","home_content",340.5/375,32.5/667);
    ui.position_append("home_toolbar_title","home_content",0,29.5/667);
    ui.width("home_toolbar_title",1);

    ui.width("home_image_menu",1);
    ui.height("home_image_menu",450/667);
    ui.y("home_image_menu",190/667);
    var profile_image = document.getElementById("profile_image");
    profile_image.style.setProperty("left",-(this.screen_width*225/375)+"px");
    ui.size("profile_image",450/375,450/667);
    ui.size("profile_image_border",350/375,350/667);
    ui.size("profile_image_img",350/375,350/667);

    ui.size("menu_body_temperature_img",50/375,50/375,true,false);
    ui.position_append("menu_body_temperature","home_image_menu",110/375,19.5/450);

    ui.size("menu_pulse_img",50/375,50/375,true,false);
    ui.position_append("menu_pulse","home_image_menu",174.5/375,104/450);

    ui.size("menu_heart_img",50/375,50/375,true,false);
    ui.position_append("menu_heart","home_image_menu",200/375,200/450);

    ui.size("menu_breath_img",50/375,50/375,true,false);
    ui.position_append("menu_breath","home_image_menu",148.5/375,319/450);

    ui.position_append("details_text","home_content",145/375,610/667);
    ui.font_size("details_text",10/667);

    ui.position_append("details_img","home_content",290/375,582/667);
    ui.width("details_img",60/375);

    ui.y("home_text",99/667);
    ui.width("home_text",1);
    ui.position_append("home_content_date","home_content",15/375,68.5/667);
    ui.margin_left("content_user_h2",13.5/375);
    ui.margin_left("content_user_status",13.5/375);

    ui.font_size("content_user_h2",30/667);
    ui.font_size("content_user_status",20/667);

    //var exec = require('child_process').exec;

    /*var req = {
     method: 'POST',
     url: 'http://54.233.152.245:15672/api/queues/martinMQT/temperature/get',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {"count":"5", "encoding":"auto", "requeue":"true"}
    }

    this.http(req)
    .success(function(){
      console.log("EXITO");
    })
    .error(function(){
      console.log("GUATIO DE NUEVO");
    });*/


    //headers.append("Authorization", "Basic " + btoa("test:test"));
    let body = JSON.stringify({count:5, encoding:"auto", requeue:false});
    //let body = '{"count":"5", "encoding":"auto", "requeue":"true"}';
    /*let headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append('Authorization', 'Basic ' + btoa('test:test'));
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credential", "*");
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://54.233.152.245:8000/",'{count:5, encoding:"auto", requeue:true}',options)
      .map(res => {console.log(res); return res.json();})
      .subscribe(data => {
          console.log("here we are!");
          console.log(data);
        },error => {
          console.log(error);
        });*/

    setInterval(() => {
      this.http.get("http://54.233.152.245:8000/")
            .map(res => res.json())
            .subscribe(data => {
              console.log('hello!');
              console.log(data);
              var temperature_value;
              var fall_value;
              var pulse_value;
              var heart_value;
              var breath_value;
              if (data['err'] !== undefined)
              {
                console.log(data['err']);
                temperature_value = "";
                fall_value = "";
                pulse_value = "";
                heart_value = "";
                breath_value = "";
              }
              else
              {
                temperature_value = data['temperature']['promedio'];
                fall_value = data['fall']['promedio'];
                pulse_value = data['pulse']['promedio'];
                heart_value = data['heart']['promedio'];
                breath_value = data['breath']['promedio'];
              }
              if ($('#menu_body_temperature_text').length == 0)
              {
                $('#menu_body_temperature').children('.selected_option_text').prepend("<span id='menu_body_temperature_text' class='selected_option_detail_number'>" + temperature_value + "ºC</span><br>");
              }
              else
              {
                $('#menu_body_temperature_text').html(temperature_value + "ºC");
              }
              if ($('#menu_pulse_text').length == 0)
              {
                $('#menu_pulse').children('.selected_option_text').prepend("<span id='menu_pulse_text' class='selected_option_detail_number'>" + pulse_value + "%</span><br>");
              }
              else
              {
                $('#menu_pulse_text').html(pulse_value + "%");
              }
              if ($('#menu_heart_text').length == 0)
              {
                $('#menu_heart').children('.selected_option_text').prepend("<span id='menu_heart_text' class='selected_option_detail_number'>" + heart_value + "%</span><br>");
              }
              else
              {
                $('#menu_heart_text').html(heart_value + "%");
              }
              if ($('#menu_breath_text').length == 0)
              {
                $('#menu_breath').children('.selected_option_text').prepend("<span id='menu_breath_text' class='selected_option_detail_number'>" + breath_value + "%</span><br>");
              }
              else
              {
                $('#menu_breath_text').html(breath_value + "%");
              }
              if (temperature_value >= 30)
              {
                $('#menu_body_temperature').addClass('selected_option_exceed');
                $('#menu_body_temperature_img').attr('src','assets/bodytempActive.png');
              }
              else
              {
                $('#menu_body_temperature').removeClass('selected_option_exceed');
                $('#menu_body_temperature_img').attr('src','assets/bodytemp.png');
              }
              if (pulse_value >= 30)
              {
                $('#menu_pulse').addClass('selected_option_exceed');
                $('#menu_pulse_img').attr('src','assets/pulse.png');
              }
              else
              {
                $('#menu_pulse').removeClass('selected_option_exceed');
                $('#menu_pulse_img').attr('src','assets/2.png');
              }
              if (heart_value >= 30)
              {
                $('#menu_heart').addClass('selected_option_exceed');
                $('#menu_heart_img').attr('src','assets/suenOOxygen.png');
              }
              else
              {
                $('#menu_heart').removeClass('selected_option_exceed');
                $('#menu_heart_img').attr('src','assets/hearthrate.png');
              }
              if (breath_value >= 30)
              {
                $('#menu_breath').addClass('selected_option_exceed');
                $('#menu_breath_img').attr('src','assets/breathe.png');
              }
              else
              {
                $('#menu_breath').removeClass('selected_option_exceed');
                $('#menu_breath_img').attr('src','assets/breath.png');
              }
              if (fall_value == 1 && states.mode != "fall" && states.fall_displayed == false)
              {
                states.mode = "fall";
                this.navCtrl.push(NotificationFallsPage);
              }
            });
    },1000);

    this.http.get("http://www.google.cl/")
          .map(res => res.json())
          .subscribe(data => {
            console.log('hello i find google!');
          });

    //sensor.set_db();
    //sensor.add_data();
  }

  change_menu()
  {
    this.navCtrl.push(MenuPage);
  }

  update_stats()
  {
    this.http.get("http://54.233.152.245:8000/")
          .map(res => res.json())
          .subscribe(data => {
            console.log('hello!');
            console.log(data);
            var temperature_value = data['temperature']['promedio'];
            if ($('#menu_body_temperature_text').length == 0)
            {
              $('#menu_body_temperature').children('.selected_option_text').prepend("<span id='menu_body_temperature_text' class='selected_option_detail_number'>" + temperature_value + "ºC</span><br>");
            }
            else
            {
              $('#menu_body_temperature_text').html(temperature_value+"ºC");
            }
          });
  }
}
