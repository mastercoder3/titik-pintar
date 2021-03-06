import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-math-page',
  templateUrl: './math-page.page.html',
  styleUrls: ['./math-page.page.scss'],
})
export class MathPagePage implements OnInit {

  lang:any;

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
ClickBacktoHome(){
  this.router.navigate(['home']);
}
ClicktoQuestionPage(){
  this.router.navigate(['math-question-page']);
  this.audio.createSound(14);
  setTimeout( () =>  {
    this.audio.createSound(9);
  }, 1000
);
  
}
}
