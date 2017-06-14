import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MenuEventsPage } from '../pages/menu_events/menu_events';
import { NotificationMovementPage } from '../pages/notification_movement/notification_movement';
import { NotificationSleepPage } from '../pages/notification_sleep/notification_sleep';
import { NotificationVitalsPage } from '../pages/notification_vitals/notification_vitals';
import { NotificationFallsPage } from '../pages/notification_falls/notification_falls';
import { HttpModule, JsonpModule } from '@angular/http';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    MenuEventsPage,
    NotificationMovementPage,
    NotificationSleepPage,
    NotificationVitalsPage,
    NotificationFallsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    MenuEventsPage,
    NotificationMovementPage,
    NotificationSleepPage,
    NotificationVitalsPage,
    NotificationFallsPage
  ],
  providers: [File,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
