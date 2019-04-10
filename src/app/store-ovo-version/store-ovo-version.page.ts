import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-store-ovo-version',
  templateUrl: './store-ovo-version.page.html',
  styleUrls: ['./store-ovo-version.page.scss'],
})
export class StoreOVOVersionPage implements OnInit {

  lang:any;
  selector: string = "avatars";
  constructor(
      private router:Router,
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
  }
}
