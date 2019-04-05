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

    this.audio.createAudio();

    setTimeout( () => {
      this.audio.createYourBack();
      this.audio.initializeAudio(localStorage.getItem('language'));
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
