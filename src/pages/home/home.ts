import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

import { BLE } from 'ionic-native';

import { File } from '@ionic-native/file';

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

declare var AWS: any;

import * as async from "async";

//import * as AWS from 'aws-sdk';

//import * as S3 from 'aws-sdk/clients/s3';

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
  file: File;

  constructor(public navCtrl: NavController, public http2: Http, platform: Platform, private file2: File) {
    this.brand = 'Martin';
    var actual_date = new Date();
    this.current_date = actual_date.getDay().toString() + ", " + actual_date.getMonth().toString() + " " + actual_date.getDay().toString();
    this.screen_width = window.innerWidth;
    this.screen_height = window.innerHeight;
    this.http = http2;
    this.file = file2;
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

    /*this.http.get("https://s3-sa-east-1.amazonaws.com/martin-audio/Data07_test.wav")
      .map(res => res.json())
      .subscribe(data => {
        console.log("hello wan!");
        console.log(data);
      });*/

  // var uploadParams = {Bucket: process.argv[2], Key: '', Body: ''};
//  var uploadParams = {Bucket: '', Key: '', Body: ''};

  // Load credentials and set region from JSON file
//  AWS.config.loadFromPath("/Users/jorge/Documents/javascipt_workspace/docking_station/uploader/config.json");

//var audio = new Audio("https://s3-sa-east-1.amazonaws.com/martin-audio/Data07_test.wav");
//audio.loop = true;
//audio.play();

  AWS.config.update({
    region: "sa-east-1"
  });

    const options = {
        accessKeyId: 'AKIAJOK7RCQHKTH2SYUA',
        secretAccessKey: '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',
        region: "sa-east-1"
    };
    const s3 = new AWS.S3(options); // Pass in opts to S3 if necessary

    var getParams = {
      Bucket: 'martin-audio', // your bucket name,
      Key: 'Data07_test.wav' // path to the object you're looking for
    };

    s3.getObject(getParams, function(err, data) {
      console.log("hello get object!");
      console.log(err);
      if (err)
          return err;

      console.log(data);
      /*var audio = new Audio(data);
      audio.loop = true;
      audio.play();*/

      //let objectData = data.Body.toString('utf-8'); // Use the encoding necessary
    });

    console.log("hi!");

    setInterval(() => {
      this.http.get("http://54.233.152.245:8000/")
            .map(res => res.json())
            .subscribe(data => {
              console.log('hello!');
              console.log(data);
              var log_data : string = JSON.stringify(data);
              this.file.checkFile(this.file.dataDirectory,"events_log.txt")
                .then(obj => { this.file.readAsText(this.file.dataDirectory,"events_log.txt")
                                .then(text => {console.log("read file"); this.file.writeExistingFile(this.file.dataDirectory,"events_log.txt",log_data + '\n' + text)})
                                .catch(error => {console.log('writing to file'); console.log(JSON.stringify(error))}); })
                .catch(err => {
                  this.file.createFile(this.file.dataDirectory,"events_log.txt",true)
                    .catch(error => {console.log('writing to file'); console.log(JSON.stringify(error))});
                  this.file.writeExistingFile(this.file.dataDirectory,"events_log.txt",log_data)
                    .catch(error => {console.log('writing to file'); console.log(JSON.stringify(error))});
                });

              var temperature_value;
              var pulse_value;
              var heart_value;
              var breath_value;

              var fall_state;
              var shake_state;
              var path_state;
              var sleep_state;

              var previous_temperature_value = null;
              var previous_pulse_value = null;
              var previous_heart_value = null;
              var previous_breath_value = null;

              if (data['err'] !== undefined)
              {
                console.log(data['err']);
                if (previous_temperature_value != null)
                {
                  temperature_value = previous_temperature_value;
                }
                else
                {
                  temperature_value = "";
                }
                if (previous_pulse_value != null)
                {
                  pulse_value = previous_pulse_value;
                }
                else
                {
                  pulse_value = "";
                }
                if (previous_heart_value != null)
                {
                  heart_value = previous_heart_value;
                }
                else
                {
                  heart_value = "";
                }
                if (previous_breath_value != null)
                {
                  breath_value = previous_breath_value;
                }
                else
                {
                  breath_value = "";
                }

                fall_state = "";
                shake_state = "";
                path_state = "";
                sleep_state = "";
              }
              else
              {
                if (isFinite(data['temperature']['promedio']))
                {
                  temperature_value = data['temperature']['promedio'];
                }
                else
                {
                  if (previous_temperature_value != null)
                  {
                    temperature_value = previous_temperature_value;
                  }
                  else
                  {
                    temperature_value = "";
                  }
                }
                if (isFinite(data['ox_saturation']['promedio']))
                {
                  pulse_value = data['ox_saturation']['promedio'];
                }
                else
                {
                  if (previous_pulse_value != null)
                  {
                    pulse_value = previous_pulse_value;
                  }
                  else
                  {
                    pulse_value = "";
                  }
                }
                if (isFinite(data['pulse']['promedio']))
                {
                  heart_value = data['pulse']['promedio'];
                }
                else
                {
                  if (previous_heart_value != null)
                  {
                    heart_value = previous_heart_value;
                  }
                  else
                  {
                    heart_value = "";
                  }
                }
                if (isFinite(data['breath_freq']['promedio']))
                {
                  breath_value = data['breath_freq']['promedio'];
                }
                else
                {
                  if (previous_breath_value != null)
                  {
                    breath_value = previous_breath_value;
                  }
                  else
                  {
                    breath_value = "";
                  }
                }
                /*pulse_value = data['ox_saturation']['promedio'];
                heart_value = data['pulse']['promedio'];
                breath_value = data['breath_freq']['promedio'];*/

                fall_state = data['fall']['state'];
                shake_state = data['shake']['state'];
                path_state = data['path']['state'];
                sleep_state = data['sleep']['state'];
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
              if (fall_state == 1 && states.mode != "fall" && states.fall_displayed == false)
              {
                states.mode = "fall";
                if ($('#p_falls').length > 0)
                {
                  console.log("fall already present");
                  this.navCtrl.pop(NotificationFallsPage);
                  //$('#p_falls').parent().remove();
                }
                states.fall_displayed = true;
                setTimeout(() => {
                  states.fall_displayed = false;
                },30000);
                this.navCtrl.push(NotificationFallsPage);
              }
              if (shake_state == 1 && states.mode != "movement" && states.movement_displayed == false)
              {
                states.mode = "movement";
                if ($('#notification_movement_container').length > 0)
                {
                  this.navCtrl.pop(NotificationMovementPage);
                  //$('#notification_movement_container').parent().remove();
                }
                states.movement_displayed = true;
                setTimeout(() => {
                  states.movement_displayed = false;
                },30000);
                this.navCtrl.push(NotificationMovementPage);
                $('#button_listen').click(function(){
                  var audio = new Audio(data['shake']['audio_file']);
                  //var audio = new Audio("https://s3-sa-east-1.amazonaws.com/martin-audio/Data07_test.wav");
                  audio.play();
                });
              }
              if (path_state == 1 && states.mode != "path" && states.path_displayed == false)
              {
                states.mode = "path";
                if ($('#p_vitals').length > 0)
                {
                  this.navCtrl.pop(NotificationVitalsPage);
                  //$('#p_vitals').parent().remove();
                }
                states.path_displayed = true;
                setTimeout(() => {
                  states.path_displayed = false;
                },30000);
                this.navCtrl.push(NotificationVitalsPage);
              }
              if (sleep_state == 1 && states.mode != "sleep" && states.sleep_displayed == false)
              {
                states.mode = "sleep";
                if ($('#p_sleep').length > 0)
                {
                  this.navCtrl.pop(NotificationSleepPage);
                  //$('#p_sleep').parent().remove();
                }
                states.sleep_displayed = true;
                setTimeout(() => {
                  states.sleep_displayed = false;
                },30000);
                this.navCtrl.push(NotificationSleepPage);
              }
              previous_temperature_value = temperature_value;
              previous_pulse_value = pulse_value;
              previous_heart_value = heart_value;
              previous_breath_value = breath_value;
            });
    },1000);

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
