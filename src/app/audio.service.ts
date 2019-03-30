import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  bgVolume = .25;
  reactionVolume = .75;

  constructor(private nativeAudio: NativeAudio) { }

  createAudio(){
    this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/this-is-happiness.mp3', this.bgVolume, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId1');
      this.nativeAudio.loop('uniqueId1');

    }, err =>{
       this.nativeAudio.play('uniqueId1');
    });
  }

  createGoodies(){
    this.nativeAudio.preloadComplex('uniqueId2', 'assets/audio/Goodies.mp3', this.reactionVolume, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId2');
    }, err =>{
      this.nativeAudio.play('uniqueId2');
    });
  }

  createLetsGo(){
    this.nativeAudio.preloadComplex('uniqueId4', 'assets/audio/Lets-go.mp3', this.reactionVolume, 1, 0)
      .then(res => {
        this.nativeAudio.play('uniqueId4');
      }, err =>{
        this.nativeAudio.play('uniqueId4');
      });
  }

  createYourBack(){
    this.nativeAudio.preloadComplex('uniqueId3', 'assets/audio/Your-back.mp3', this.reactionVolume, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId3');

    }, err =>{
      this.nativeAudio.play('uniqueId3');
    });
  }

  createNotAvailable(){
    this.nativeAudio.preloadComplex('uniqueId5', 'assets/audio/Not-available-yet.mp3', this.reactionVolume, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId5');

    }, err =>{
      this.nativeAudio.play('uniqueId5');
    });
  }

  off(){
    this.nativeAudio.stop('uniqueId1');
  }

  on(){
    this.nativeAudio.play('uniqueId1');
  }


  setVolume(val){
    this.nativeAudio.setVolumeForComplexAsset('uniqueId1', val)
  }

  setReactionVolume(val){
    this.reactionVolume = val;
  }
}
