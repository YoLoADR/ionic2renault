import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { SlidesModule } from '../pages/slides/slides.module';
import { GridModule } from '../pages/grid/grid.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { FeedsModule } from '../pages/feeds/feeds.module';
import { YoutubeModule } from '../pages/youtube/youtube.module';
import { AboutModule } from '../pages/about/about.module';
import { ContactModule } from '../pages/contact/contact.module';
import { DatetimeModule } from '../pages/datetime/datetime.module';
import { RangesModule } from '../pages/ranges/ranges.module';
import { ActionSheetModule } from '../pages/action-sheet/action-sheet.module';
import { FacebookConnectModule } from '../pages/facebook-connect/facebook-connect.module';
import { LoginModule } from '../pages/login/login.module';
import { BarcodeScannerModule } from '../pages/barcode-scanner/barcode-scanner.module';
import { ChartsModule } from '../pages/charts/charts.module';
//import { FirebaseModule } from '../pages/firebase/firebase.module';
import { AccountModule } from '../pages/account/account.module';
import { CreateAccountModule } from '../pages/create-account/create-account.module';
import { ResetPasswordModule } from '../pages/reset-password/reset-password.module';
import { SignUpModule } from '../pages/sign-up/sign-up.module';
// Module Example: Use the PlaceholderModule for any new App Module
import { PlaceholderModule } from '../pages/placeholder/placeholder.module';

import { MyApp } from './app.component';

var config = {
    apiKey: "AIzaSyBYAP5g8BXUKWeLdmfoTJoxi4uAbNR1TzE",
    authDomain: "ionicrenaultapp.firebaseapp.com",
    databaseURL: "https://ionicrenaultapp.firebaseio.com",
    projectId: "ionicrenaultapp",
    storageBucket: "ionicrenaultapp.appspot.com",
    messagingSenderId: "395294032878"
  };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule,
    HomeModule,
    TabsModule,
    GoogleMapsModule,
    WordpressModule,
    SlidesModule,
    GridModule,
    SettingsModule,
    FeedsModule,
    YoutubeModule,
    AboutModule,
    ContactModule,
    DatetimeModule,
    RangesModule,
    ActionSheetModule,
    FacebookConnectModule,
    LoginModule,
    BarcodeScannerModule,
    ChartsModule,
    PlaceholderModule,
    AccountModule,
    CreateAccountModule,
    ResetPasswordModule,
    SignUpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
