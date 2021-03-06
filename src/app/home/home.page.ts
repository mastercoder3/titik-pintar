import {Component, NgModule, OnInit} from '@angular/core';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {AudioService} from '../audio.service';
import {Router, RouterModule} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FeatureModule} from '../component.module';
import {ProfilePage} from '../profile/profile.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FeatureModule,
        TranslateModule
    ]
})

export class HomePage implements OnInit {

    lang:any;

    constructor(
        private nativeAudio: NativeAudio,
        private audio: AudioService,
        private router: Router,
        private screenOrientation: ScreenOrientation,
        public translate: TranslateService) {

        if(localStorage.getItem('language')){
            this.lang = localStorage.getItem('language')
            this.translate.setDefaultLang(this.lang);
            this.translate.use(this.lang);
        }
    }

    ngOnInit() {
        console.log(this.screenOrientation.type);
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

        setTimeout(() => {

            this.audio.setLang(localStorage.getItem('language'));
            this.audio.createAudio();
            this.audio.createSound(2, 'start');
        }, 500);


    }

    ClicktoPlay() {
        this.audio.createSound(3);
    }

    ClicktoProfilepage() {
        this.router.navigate(['profile']);
    }

    ClicktoFeatureScreen() {
        this.router.navigate(['featured-screen']);
    }

    ClicktoMathPage() {
        this.audio.createSound(19);
        this.router.navigate(['math-page']);
    }

}
