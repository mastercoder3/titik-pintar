import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private nativeAudio: NativeAudio) { }

  createAudio(){
    this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/this-is-happiness.mp3', 0.5, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId1');
      this.nativeAudio.loop('uniqueId1');

    }, err =>{
       this.nativeAudio.play('uniqueId1');
    });
  }

  off(){
    this.nativeAudio.play('uniqueId1');
  }

  on(){
    this.nativeAudio.stop('uniqueId1');
  }

  setVolume(val){
    this.nativeAudio.setVolumeForComplexAsset('uniqueId1', val)
  }
}
