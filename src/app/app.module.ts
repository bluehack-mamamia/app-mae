import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {ProductProvider} from "../providers/product/product";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";

export const firebaseConfig = {
  //apiKey: "xxxxxxxxxx",
  //authDomain: "encart-e560f.firebaseio.com",
  databaseURL: "https://encart-e560f.firebaseio.com",
  /*storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'*/
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
  ]
})
export class AppModule {

}
