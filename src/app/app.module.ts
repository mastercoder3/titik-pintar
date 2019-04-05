import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioService } from './audio.service';
import { MathPageModalComponent } from './math-page-modal/math-page-modal.component';
import { ModalWrongAnsComponent } from './modal-wrong-ans/modal-wrong-ans.component';
import { ModalRightAnsComponent } from './modal-right-ans/modal-right-ans.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent,MathPageModalComponent,ModalWrongAnsComponent,ModalRightAnsComponent],
  entryComponents: [MathPageModalComponent, ModalWrongAnsComponent, ModalRightAnsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  })],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    AudioService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
