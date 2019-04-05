import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioService } from '../audio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private nativeAudio: NativeAudio, private audio : AudioService,private router: Router,) { }

  ngOnInit(){



    setTimeout( () => {

      this.audio.initializeAudio(localStorage.getItem('language'));
      this.audio.createAudio();
      this.audio.createYourBack();
    },500);
    
     
  }

  ClicktoPlay(){
    this.audio.createNotAvailable();
  }

  ClicktoProfilepage(){
    this.router.navigate(['profile']);
  }
  ClicktoFeatureScreen(){
    this.router.navigate(['featured-screen']);
  }
  ClicktoMathPage(){
    this.router.navigate(['math-page']);
  }

}
