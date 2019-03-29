import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss'],
})
export class Footer1Component implements OnInit {

  constructor(private router: Router, private nativeAudio: NativeAudio) { }

  ngOnInit() {}
  
  openStorePage(){
    this.router.navigate(['store']);
    this.nativeAudio.preloadComplex('uniqueId2', 'assets/audio/Goodies.mp3', 1, 1, 0)
      .then(res => {
        this.nativeAudio.play('uniqueId2');
      }, err =>{
        this.nativeAudio.play('uniqueId2');
      });
  }
 
}
