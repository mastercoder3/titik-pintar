import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-featured-screen',
  templateUrl: './featured-screen.page.html',
  styleUrls: ['./featured-screen.page.scss'],
})
export class FeaturedScreenPage implements OnInit {

  lang:any;

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
  ClicktoBack(){
    this.router.navigate(['home']);
  }
}
