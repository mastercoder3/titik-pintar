import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss'],
})
export class Footer2Component implements OnInit {

  constructor(private router: Router, private nativeAudio: NativeAudio) { }

  ngOnInit() {}
  openHomePage(){
    this.router.navigate(['home']);
    this.nativeAudio.preloadComplex('uniqueId4', 'assets/audio/Lets-go.mp3', 1, 1, 0)
      .then(res => {
        this.nativeAudio.play('uniqueId4');
      }, err =>{
        this.nativeAudio.play('uniqueId4');
      });
  }
}
