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
  constructor(private nativeAudio: NativeAudio, private audio : AudioService,private router: Router) { }

  ngOnInit(){

    this.audio.createAudio();


      this.nativeAudio.preloadComplex('uniqueId3', 'assets/audio/Your-back.mp3', 1, 1, 0)
      .then(res => {
        this.nativeAudio.play('uniqueId3');

      }, err =>{
        this.nativeAudio.play('uniqueId3');
      });
  }

  ClicktoPlay(){
    this.nativeAudio.preloadComplex('uniqueId5', 'assets/audio/Not-available-yet.mp3', 1, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId5');

    }, err =>{
      this.nativeAudio.play('uniqueId5');
    });
  }

  ClicktoProfilepage(){
    this.router.navigate(['profile']);
  }
  
}
