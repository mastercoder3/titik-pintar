import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  lang:any;
  selector: string = "avatars";
  constructor(
      private router:Router,
      private audio:AudioService,
      public translate: TranslateService) {

    if(localStorage.getItem('language')){
      this.lang = localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
  }

  ngOnInit() {
  }
  ClicktoProfilepage() {
    this.router.navigate(['profile']);
  }
  changeSwitchCase(val){
    this.selector = val;
    if(val==='avatars'){
     this.audio.createAvatarChange();
    }
    else{
      this.audio.createGiftsChange();
    }
  }
}
